import styles from './styles.module.css';
import Product from '~/components/product';
import formatProduct from '~/utils/formatProduct';

const SelectedForYou = (props) => {
  const {products} = props;

  return (
    <main className={styles.main}>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div className={styles.productContainer}>
            <Product product={formatProduct(product)} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default SelectedForYou;
