import {LoaderFunctionArgs, json} from '@shopify/remix-oxygen';
import ShopPage from './page';
import {useLoaderData} from '@remix-run/react';

/**
 * Loader
 */
export async function loader({context}: LoaderFunctionArgs) {
  const {collections} = await context.storefront.query(COLLECTIONS_QUERY);
  return json({collections: collections.edges});
}

/**
 * Page
 */
export default function index() {
  const {collections} = useLoaderData() as any;
  return <ShopPage collections={collections} />;
}

/**
 * Queries
 */

const COLLECTIONS_QUERY = `#graphql
  query COLLECTIONS {
  collections(first: 7) {
    edges {
      node {
        title
        description
        descriptionHtml
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
