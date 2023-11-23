import styles from './styles.module.css';
import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import getCurrencySymbol from '~/utils/getCurrencySymbol';
import removeTrailingZeros from '~/utils/removeTrailingZeros';

const Product = (props) => {
  let {product} = props;

  const {images, options, price, title} = product;
  const image = images[0];

  const sizes = options.sizes.values;
  let {amount, currencyCode} = price;

  amount = removeTrailingZeros(amount).toLocaleString();
  let currencySymbol = getCurrencySymbol(currencyCode) || '';
  return (
    <div className={styles.product}>
      <Link
        to={`/products/${product.handle}`}
        key={product.title}
        className={styles.product_link}
      >
        <Image
          data={image}
          className={styles.product_image}
          sizes="(min-width: 300px) 33vw, 50vw"
        />

        {/* PRODUCT INFORMATION (NAME, SIZES, PRICE) */}
        <div className={styles.product_info}>
          <div className={styles.product_sizes}>
            {sizes.map((size) => (
              <span key={size} className={styles.size}>
                {size}
              </span>
            ))}
            <h4 className={styles.sizes_title}>Sizes:</h4>
          </div>

          <div className={styles.product_price}>
            <h4 className={styles.amount}>{`${amount}${currencySymbol}`}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
