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
  if (customerAccessToken) {
    return redirect('/account');
  }

  return null;
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
    const form = await request.formData();
    const firstName = String(form?.get('firstName') || '');
    const lastName = String(form?.get('lastName') || '');
    const phone = String(form?.get('phone') || '');
    const email = String(form?.get('email') || '');
    const password = String(form?.get('password') || '');

    const validInputs = Boolean(
      firstName && lastName && email && password && phone,
    );
    const validPhone = isValidPhoneNumber(phone);

    if (!validInputs) throw new Error('Please fill the required fields above');
    if (!validPhone) throw new Error('Please Enter a valid phone');

    // Create customer
    const {customerCreate} = await storefront.mutate(CUSTOMER_CREATE_MUTATION, {
      variables: {
        input: {firstName, lastName, phone, email, password},
      },
    });

    console.log(customerCreate);
    // Check if customer is created successfully
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

    console.log(customerAccessTokenCreate?.customerAccessToken?.accessToken);
    if (!customerAccessTokenCreate?.customerAccessToken?.accessToken) {
      throw new Error('Missing access token');
    }

    // Add access token
    session.set(
      'customerAccessToken',
      customerAccessTokenCreate?.customerAccessToken,
    );

    return json(
      {error: null, newCustomer},
      {
        status: 302,
        headers: {
          'Set-Cookie': await session.commit(),
          Location: '/',
        },
      },
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return json({error: error.message}, {status: 400});
    }
    return json({error}, {status: 400});
  }
}

export default function index() {
  return <RegisterPage />;
}

const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation customerCreate(
    $input: CustomerCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
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
  mutation registerLogin(
    $input: CustomerAccessTokenCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;
