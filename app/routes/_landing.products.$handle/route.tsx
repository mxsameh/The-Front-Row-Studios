import {useLoaderData} from '@remix-run/react';
import {LoaderFunctionArgs, json} from '@shopify/remix-oxygen';
import Product_Page from './page';
import formatProduct from '~/utils/formatProduct';

/**
 * Loader
 */
export async function loader({context, params, request}: LoaderFunctionArgs) {
  /** Product Handle */
  const {handle} = params;
  const searchParams = new URL(request.url).searchParams;

  /** Get Selected Options from URL SearchParams*/
  const selectedOptions: any = [];

  searchParams.forEach((value, name) => {
    selectedOptions.push({name, value});
  });

  /** GET PRODUCT FROM API */
  const {product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {handle, selectedOptions},
  });

  const formattedProduct = formatProduct(product);

  return json({
    product: formattedProduct,
  });
}

/**
 * Route
 */
export default function index() {
  const {product} = useLoaderData() as any;

  return <Product_Page product={product} />;
}

/**
 * QUERIES
 */
const PRODUCT_QUERY = `#graphql
query PRODUCT_BY_HANDLE($handle: String, $selectedOptions: [SelectedOptionInput!]!) {
  product(handle: $handle) {
    title
    description
    descriptionHtml
    tags
    images(first: 6) {
      nodes {
        url
        id
        altText
        width
      }
    }
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions){
      id
      availableForSale
        selectedOptions{
          name
          value
        }
      price{
        amount
        currencyCode
      }
    }
    variants(first: 1) {
      nodes {
        id
        availableForSale
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
`;
