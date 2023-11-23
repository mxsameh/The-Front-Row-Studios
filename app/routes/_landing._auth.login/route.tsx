import {LoaderArgs, redirect, json, ActionArgs} from '@shopify/remix-oxygen';
import LoginPage from './page';

/**
 * Loader
 */
export async function loader({context}: LoaderArgs) {
  const {session} = context;
  const customerAccessToken = await session.get('customerAccessToken');
  if (customerAccessToken) {
    return redirect('/account');
  }
  return null;
}

/**
 * Actoin
 */
export async function action({context, request}: ActionArgs) {
  const {session, storefront} = context;

  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  try {
    const form = await request.formData();
    const email = String(form.has('email') ? form.get('email') : '');
    const password = String(form.has('password') ? form.get('password') : '');
    const validInputs = Boolean(email && password);

    // If email or password missing
    if (!validInputs) {
      throw new Error('Please provide both an email and a password.');
    }

    // Get user token
    const {customerAccessTokenCreate} = await storefront.mutate(
      LOGIN_MUTATION,
      {
        variables: {
          input: {email, password},
        },
      },
    );

    const {customerAccessToken, customerUserErrors = []} =
      customerAccessTokenCreate || {};

    if (!customerAccessToken) {
      //   throw new Error('Email or password are incorrect!');
      throw new Error(
        customerUserErrors[0].message || 'Please contact support',
      );
    }
    session.set('customerAccessToken', customerAccessToken);

    return redirect('/', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  } catch (error: any) {
    return json({error: error.message}, {status: 400});
  }
}

/**
 * Route
 */
export default function index() {
  return <LoginPage />;
}

/**
 * Queries
 */
const LOGIN_MUTATION = `#graphql
  mutation login($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
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
