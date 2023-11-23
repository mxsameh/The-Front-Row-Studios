import {ActionFunctionArgs, json} from '@shopify/remix-oxygen';
import ProfilePage from './page';

/**
 * Action
 */
export async function action({request, context}: ActionFunctionArgs) {
  const {session, storefront} = context;
  const {accessToken} = await session.get('customerAccessToken');

  try {
    const form = await request.formData();
    let customerData = form.get('customer') as any;
    customerData = JSON.parse(customerData);

    // mutate customer data
    const {customerUpdate} = await storefront.mutate(CUSTOMER_UPDATE, {
      variables: {
        customerAccessToken: accessToken,
        customer: customerData,
      },
    });

    const {customer, customerAccessToken, customerUserErrors} =
      customerUpdate || {};

    // check for mutation errors
    if (customerUserErrors?.length) {
      // throw new Error(customerUserErrors[0].message);
    }

    // update session with the updated access token
    if (customerAccessToken?.accessToken) {
      session.set('customerAccessToken', customerAccessToken);
    }

    console.log('updated successfully');
    return json({customer}, {headers: {'Set-Cookie': await session.commit()}});
  } catch (error: any) {
    console.log(error.message);
    return json({error: error.message, customer: null}, {status: 400});
  }
}

/**
 * Page
 */
export default function index() {
  return <ProfilePage />;
}

/**
 * Queries
 */
const CUSTOMER_UPDATE = `#graphql
mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
  customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
    customer {
      firstName
      email
      phone
    }
    customerAccessToken {
      accessToken
    }
    customerUserErrors {
      code
      message
    }
  }
}`;
