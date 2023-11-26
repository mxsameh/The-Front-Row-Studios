import {json, redirect, type ActionFunction} from '@shopify/remix-oxygen';
import {type MetaFunction} from '@remix-run/react';
import Activate from './page';

const badRequest = (data) => json(data, {status: 400});

/**
 * Meta
 */
export const meta: MetaFunction = () => {
  return [{title: 'Activate Account'}];
};

/**
 * Action
 */
export const action: ActionFunction = async ({request, context}) => {
  const {session, storefront} = context;
  const {searchParams} = new URL(request.url);
  const activationUrl = searchParams.get('activationUrl');

  // Verify request params (id, activation token)
  if (!activationUrl || typeof activationUrl !== 'string') {
    return badRequest({
      error: 'Wrong token. The link you followed might be wrong.',
    });
  }

  // Get form data
  const formData = await request.formData();
  const password = formData.get('password');

  // Validate password
  if (!password || typeof password !== 'string') {
    return badRequest({
      error: 'Please provide strong password',
    });
  }

  // Activate customer
  try {
    const data = await storefront.mutate(CUSTOMER_ACTIVATE_MUTATION, {
      variables: {
        activationUrl,
        password,
      },
    });

    const customerAccessToken =
      data?.customerActivateByUrl?.customerAccessToken;

    // Something is wrong with the user's input.
    if (!customerAccessToken.accessToken) {
      throw new Error(
        data?.customerActivateByUrl?.customerUserErrors.join(', '),
      );
    }

    // Add session token
    session.set('customerAccessToken', customerAccessToken);

    return redirect('/account', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  } catch (error: any) {
    console.log(error, error.message);

    if (storefront.isApiError(error)) {
      return badRequest({
        error: 'Something went wrong. Please try again later.',
      });
    }

    /**
     * The user did something wrong, but the raw error from the API is not super friendly.
     * Let's make one up.
     */
    return badRequest({
      error: 'Sorry. We could not activate your account.',
    });
  }
};

export default function index() {
  return <Activate />;
}

const CUSTOMER_ACTIVATE_MUTATION = `#graphql
  mutation customerActivateByUrl($activationUrl: URL!, $password: String!) {
    customerActivateByUrl(activationUrl: $activationUrl, password: $password) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
