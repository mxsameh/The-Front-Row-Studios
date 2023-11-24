import {useLoaderData} from '@remix-run/react';
import { LoaderFunctionArgs, json} from '@shopify/remix-oxygen';
import ShopAll from './page';

/**
 * Loader
 */
export async function loader({context}: LoaderFunctionArgs) {
  const {products} = await context.storefront.query(PRODUCTS_QUERY);

  return json({products: products.nodes});
}

/**
 * Page
 */
export default function index() {
  const {products} = useLoaderData() as any;

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
