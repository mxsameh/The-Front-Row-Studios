import styles from './styles.module.css';
import testImage from '~/assets/images/product1.png';

const Test = (props) => {
  const {collections} = props;
  const category = collections[0].node;
  const {title, description, products} = category;
  return (
    <div className={styles.page}>
      <section className={styles.category}>
        <div className={styles.category_info}>
          <h2 className={styles.category_title}>{title}</h2>
          <p className={styles.category_description}>{description}</p>
        </div>
        <Product product={products.nodes[0]} />
        <Product product={products.nodes[0]} />
      </section>
    </div>
  );
};
export default Test;

const Product = ({product}) => {
  // console.log(product);
  const images = product.images.nodes;
  return (
    <div className={styles.category_product}>
      <div className={styles.product_imageContainer}>
        <img
          src={images[0].url}
          alt="testing"
          className={styles.product_image}
        />
      </div>
    </div>
  );
};
