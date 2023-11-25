import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from '@shopify/remix-oxygen';
import {isValidPhoneNumber} from 'react-phone-number-input';
import RegisterPage from './page';

/**
 * Loader
 */
export async function loader({context}: LoaderFunctionArgs) {
  const customerAccessToken = await context.session.get('customerAccessToken');

  if (customerAccessToken) return redirect('/account');
  else return null;
}

/**
 * Actions
 */
export async function action({request, context}: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  const {storefront, session} = context;

  try {
    let form = await request.formData();
    let firstName = String(form?.get('firstName') || '');
    let lastName = String(form?.get('lastName') || '');
    let phone = String(form?.get('phone') || '');
    const email = String(form?.get('email') || '');
    const password = String(form?.get('password') || '');

    const validInputs = Boolean(
      firstName && lastName && email && password && phone,
    );

    phone = phone.replaceAll(' ', '');
    const validPhone = isValidPhoneNumber(phone);

    if (!validInputs) throw new Error('Please fill the required fields above');
    if (!validPhone) throw new Error('Please Enter a valid phone');

    // Create customer
    const {customerCreate} = await storefront.mutate(CUSTOMER_CREATE_MUTATION, {
      variables: {
        input: {firstName, lastName, phone, email, password},
      },
    });

    // Check if customer is created unsuccessfully
    if (customerCreate?.customerUserErrors?.length) {
      throw new Error(customerCreate?.customerUserErrors[0].message);
    }

    const newCustomer = customerCreate?.customer;
    if (!newCustomer?.id) {
      throw new Error('Could not create customer');
    }

    // Get new customer's access token
    const {customerAccessTokenCreate} = await storefront.mutate(
      CREATE_ACCESS_TOKEN_MUTATION,
      {
        variables: {
          input: {
            email,
            password,
          },
        },
      },
    );

    if (!customerAccessTokenCreate?.customerAccessToken?.accessToken) {
      throw new Error('Missing access token');
    }

    // Add access token
    session.set(
      'customerAccessToken',
      customerAccessTokenCreate?.customerAccessToken,
    );

    return redirect('/', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error)
      return json({error: error.message}, {status: 400});
    else return json({error}, {status: 400});
  }
}

export default function index() {
  return <RegisterPage />;
}

const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

const CREATE_ACCESS_TOKEN_MUTATION = `#graphql
  mutation registerLogin($input: CustomerAccessTokenCreateInput!) {
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
