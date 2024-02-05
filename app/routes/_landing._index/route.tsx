import {useLoaderData} from '@remix-run/react';
import {LoaderFunctionArgs, json} from '@shopify/remix-oxygen';
import HomePage from './page';

/**
 * Loader
 */
export async function loader({context}: LoaderFunctionArgs) {
  const {products} = await context.storefront.query(PRODUCTS_QUERY);
  return json({products: products.nodes});
}

/**
 * Route
 */
export default function index() {
  const {products} = useLoaderData() || ({} as any);
  return <HomePage products={products} />;
}

/**
 * QUERIES
 */
const PRODUCTS_QUERY = `#graphql
  query PRODUCTS {
    products(first: 10, query:"selected for you") {
      nodes {
        handle
        title
        options{
          name
          values
        }
        images(first:1){
          nodes{
            id
            url
            altText
          }
        }
        variants(first:1){
          nodes{
            price{
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
