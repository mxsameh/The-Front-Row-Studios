import styles from './styles.module.css';
import Product from '~/components/product';
import formatProduct from '~/utils/formatProduct';

const SelectedProducts = (props) => {
  const {products} = props;
  return (
    <section className={styles.selected}>
      <h1 className={styles.selected_title}>DROP 01: THE FRONT ROW STUDIOS.</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div className={styles.productContainer} key={product.handle}>
            <Product product={formatProduct(product)} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default SelectedProducts;
