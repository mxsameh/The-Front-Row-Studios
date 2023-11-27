import {LoaderFunctionArgs, json} from '@shopify/remix-oxygen';
import Orders from './page';
import {useLoaderData} from '@remix-run/react';

/**
 * Loader
 */
export async function loader({context}: LoaderFunctionArgs) {
  const {session} = context;
  const customerAccessToken = await session.get('customerAccessToken');

  const {customer} = await context.storefront.query(ORDERS_QUERY, {
    variables: {
      customerAccessToken: customerAccessToken.accessToken,
    },
  });

  return json({orders: customer.orders.nodes});
}

/**
 * Route
 */
export default function index() {
  const {orders} = useLoaderData() || ({} as any);
  return <Orders orders={orders} />;
}

/**
 * QUERIES
 */
const ORDERS_QUERY = `#graphql
  query ORDERS($customerAccessToken:String!){
    customer(customerAccessToken: $customerAccessToken) {
      orders(first:2){
        nodes{
          fulfillmentStatus
          financialStatus
          processedAt
          name
          lineItems(first:10){
            nodes{
              title
              quantity
            }
          }
          totalPrice{
            amount
            currencyCode
          }
        }
      }
    }
  }
`;
