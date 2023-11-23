import {ActionArgs, json, redirect} from '@shopify/remix-oxygen';
import ResetPassword from './page';

/**
 * Action
 */

export async function action({request, context}: ActionArgs) {
  const form = await request.formData();
  const email = String(form?.get('email') || '');

  // Check if method is POST
  if (request.method != 'POST')
    return json({error: 'Method not allowed'}, {status: 405});
  try {
    // Check if email is provided
    if (!email) throw new Error('Please provide an email');

    // Reset password
    const {customerRecover} = await context.storefront.mutate(
      CUSTOMER_RECOVER_MUTATION,
      {
        variables: {email},
      },
    );

    // Check if any errors
    const {customerUserErrors} = customerRecover || {};
    if (customerUserErrors?.length)
      throw new Error(customerUserErrors[0].message);

    return json({resetRequested: true});
  } catch (error: any) {
    if (error instanceof Error) {
      return json({error: error.message, resetRequested: false}, {status: 400});
    }
    return json({error, resetRequested: false}, {status: 400});
  }
}

/**
 * Reset Password Page
 */
export default function index() {
  return <ResetPassword />;
}

const CUSTOMER_RECOVER_MUTATION = `#graphql
mutation customerRecover($email: String!) {
  customerRecover(email: $email) {
    customerUserErrors {
        code
        field
        message
    }
  }
}
`;
