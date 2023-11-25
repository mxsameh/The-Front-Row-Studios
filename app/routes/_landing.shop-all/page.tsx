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
            IN THE FINEST FABRICS & THE SEXIEST SILHOUETTES, WE PRESENT TO YOU
            THE POWER OF SENSUALITY THROUGH OUR FIRST FALL/WINTER COLLECTION -
            "THE FRONT ROW STUDIOS". FOLLOWING THE FEMALE BODY & GAZE, THIS
            COLLECTION EMBODIES A SENSE OF LUXURY, CONFIDENCE & INDULGENCE.
            INTERTWINED WITH OUR STATEMENT PIECES ARE TIMELESS ESSENTIALS THAT
            ECHO THROUGH ERAS. HANDMADE & TAILORED TO PERFECTION, THESE PIECES
            ARE MADE JUST FOR YOU
          </p>
        </div>
        {products.map((product) => (
          <div key={product.handle} className={styles.productContainer}>
            <Product product={formatProduct(product)} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ShopAll;
