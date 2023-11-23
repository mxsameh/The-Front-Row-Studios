import {useLoaderData} from '@remix-run/react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import ShopAll from './page';

/**
 * Loader
 */
export async function loader({context}: LoaderArgs) {
  const {products} = await context.storefront.query(PRODUCTS_QUERY);

  return json({products: products.nodes});
}

/**
 * Page
 */
export default function index() {
  const {products} = useLoaderData();

  return <ShopAll products={products} />;
}

/**
 * QUERIES
 */
const PRODUCTS_QUERY = `#graphql
    query PRODUCTS {
    products(first: 10) {
        nodes {
        handle
        title
        images(first: 1) {
            nodes {
            id
            altText
            url
            }
        }
        options {
            name
            values
        }
        variants(first: 1) {
            nodes {
            price {
                amount
                currencyCode
            }
            }
        }
        }
    }
    }
`;
