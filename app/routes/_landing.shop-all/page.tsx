import styles from './styles.module.css';
import Product from '~/components/product';
import formatProduct from '~/utils/formatProduct';

const ShopAll = (props) => {
  const {products} = props;

  return (
    <main className={styles.main}>
      <div className={styles.productsGrid}>
        <div className={styles.collection}>
          <h1 className={styles.collection_title}>WELCOME TO THE FRONT ROW</h1>
          <p className={styles.collection_desc}>
            In the finest fabrics & the sexiest silhouettes, we present to you
            the power of sensuality through our first Fall/Winter collection -
            "THE FRONT ROW STUDIOS". Following the female body & gaze, this
            collection embodies a sense of luxury, confidence & indulgence.
            Intertwined with our statement pieces are timeless essentials that
            echo through eras. Handmade & tailored to perfection, these pieces
            are made just for you
          </p>
        </div>
        {products.map((product) => (
          <div className={styles.productContainer}>
            <Product product={formatProduct(product)} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ShopAll;
