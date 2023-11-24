import {json} from '@shopify/remix-oxygen';
import AddressBook from './page';

/**
 * Action
 */
export async function action({request, context}) {
  const {storefront, session} = context;

  try {
    const form = await request.formData();

    const addressId = String(form.get('addressId')) || null;

    if (!addressId) {
      throw new Error('You must provide an address id.');
    }

    const customerAccessToken = await session.get('customerAccessToken');
    if (!customerAccessToken) {
      return json({error: {[addressId]: 'Unauthorized'}}, {status: 401});
    }
    const {accessToken} = customerAccessToken;

    // const defaultAddress = form.has('defaultAddress')
    //   ? String(form.get('defaultAddress')) === 'on'
    //   : null;
    const address = {};
    const keys = [
      'country',
      'city',
      'zip',
      'address1',
      'address2',
      // 'firstName',
      // 'lastName',
      // 'phone',
    ];

    for (const key of keys) {
      const value = form.get(key);
      if (typeof value === 'string') {
        address[key] = value;
      }
    }
    const {customerAddressUpdate} = await storefront.mutate(
      UPDATE_ADDRESS_MUTATION,
      {
        variables: {
          address,
          customerAccessToken: accessToken,
          id: decodeURIComponent(addressId),
        },
      },
    );

    const updatedAddress = customerAddressUpdate?.customerAddress;

    if (customerAddressUpdate?.customerUserErrors?.length) {
      const error = customerAddressUpdate.customerUserErrors[0];
      throw new Error(error.message);
    }

    return json({error: null, updatedAddress});
  } catch (error) {
    if (error instanceof Error) {
      return json({error: error.message}, {status: 400});
    }
    return json({error}, {status: 400});
  }
}
/**
 * Page
 */
export default function index() {
  return <AddressBook />;
}

/**
 * Queries
 */
const UPDATE_ADDRESS_MUTATION = `#graphql
  mutation customerAddressUpdate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
    $id: ID!
 ) {
    customerAddressUpdate(
      address: $address
      customerAccessToken: $customerAccessToken
      id: $id
    ) {
      customerAddress {
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
