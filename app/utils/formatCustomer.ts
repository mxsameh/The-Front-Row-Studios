import {ICustomer, IShopifyCustomer} from '~/types/customer';

/**
 * @def Function that converts shopify customer to a local customer
 * @Input Shopify Customer
 * @returns Customer
 */
const formatCustomer = (
  shopifyCustomer: IShopifyCustomer,
): null | ICustomer => {
  if (!shopifyCustomer) return null;

  const {id, email, firstName, lastName, phone, defaultAddress, metafield} =
    shopifyCustomer;
  const birthDate = metafield?.value;
  const birthDateId = metafield?.id;
  const customer: ICustomer = {
    id,
    email,
    firstName,
    lastName,
    phone,
    birthDate,
    defaultAddress,
  };

  return customer;
};
export default formatCustomer;
