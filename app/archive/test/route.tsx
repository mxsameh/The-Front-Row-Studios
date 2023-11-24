import {LoaderFunctionArgs, json} from '@shopify/remix-oxygen';
import Test from './page';
import {useLoaderData} from '@remix-run/react';

/**
 * Route
 */
export async function loader({context}: LoaderFunctionArgs) {
  const {collections} = (await context.storefront.query(
    COLLECTIONS_QUERY,
  )) as any;
  return json({collections: collections.edges});
}

/**
 * Route
 */
export default function index() {
  const {collections} = useLoaderData() as any;
  return <Test collections={collections} />;
}
/**
 * Queries
 */

const COLLECTIONS_QUERY = `#graphql
  query COLLECTIONS {
  collections(first: 1) {
    edges {
      node {
        title
        description
        products(first: 2) {
          nodes {
            title
            handle
            options{
              name
              values
            }
            images(first: 5) {
              nodes {
                id
                altText
                url
              }
            }
            variants(first: 1) {
              nodes {
                selectedOptions{
                  name
                  value
                }
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
