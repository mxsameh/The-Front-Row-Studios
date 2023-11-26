import {
  ActionFunction,
  ActionFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from '@shopify/remix-oxygen';
import Recover from './page';

/**
 * Meta
 */
export const meta: MetaFunction = () => {
  return [{title: 'Reset Password'}];
};

/**
 * Action
 */

const badRequest = (data) => json(data, {status: 400});
export const action: ActionFunction = async ({
  request,
  context,
}: ActionFunctionArgs) => {
  const {searchParams} = new URL(request.url);
  const resetUrl = searchParams.get('resetUrl');
  console.log(resetUrl);

  if (!resetUrl || typeof resetUrl !== 'string') {
    return badRequest({
      error: 'Wrong token. Please try to reset your password again.',
    });
  }

  // Form data
  const formData = await request.formData();
  const password = formData.get('password');

  // Verify password
  if (!password || typeof password !== 'string') {
    return badRequest({
      error: 'Please provide strong password',
    });
  }

  // Reset password
  const {session, storefront} = context;
  try {
    const data = await storefront.mutate(CUSTOMER_RESET_MUTATION, {
      variables: {
        resetUrl,
        password,
      },
    });

    // Something is wrong with the user's input.
    const {accessToken} = data?.customerResetByUrl?.customerAccessToken ?? {};
    if (!accessToken) {
      throw new Error(data?.customerResetByUrl?.customerUserErrors.join(', '));
    }

    // Reset succeded
    session.set('customerAccessToken', accessToken);

    return redirect('/', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  } catch (error: any) {
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
      error: 'Sorry. We could not update your password.',
    });
  }
};

/**
 * Page
 */
export default function index() {
  return <Recover />;
}

const CUSTOMER_RESET_MUTATION = `#graphql
  mutation customerResetByUrl($resetUrl: URL! $password: String!) {
    customerResetByUrl(resetUrl: $resetUrl, password: $password) {
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
