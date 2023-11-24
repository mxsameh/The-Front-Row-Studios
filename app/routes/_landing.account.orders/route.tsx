import {LoaderArgs, json} from '@shopify/remix-oxygen';
import Orders from './page';
import {useLoaderData} from '@remix-run/react';

/**
 * Loader
 */
export async function loader({context}: LoaderArgs) {
  const {customer} = await context.storefront.query(ORDERS_QUERY);

  return json({orders: customer.orders.nodes});
}

/**
 * Route
 */
export default function index() {
  const {orders} = useLoaderData();
  return <Orders orders={orders} />;
}

/**
 * QUERIES
 */
const ORDERS_QUERY = `#graphql
  query ORDERS{
    customer(customerAccessToken: "028c88a8428c18fe8e565208f4530e95") {
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
