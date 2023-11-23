import styles from './styles.module.css';
import Product from '~/components/product';
import formatProduct from '~/utils/formatProduct';

const SelectedProducts = (props) => {
  const {products} = props;
  return (
    <section className={styles.selected}>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div className={styles.productContainer}>
            <Product product={formatProduct(product)} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default SelectedProducts;
