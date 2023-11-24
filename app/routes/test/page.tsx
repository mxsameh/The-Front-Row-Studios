import styles from './styles.module.css';
import testImage from '~/assets/images/product1.png';

const Test = () => {
  return (
    <div className={styles.page}>
      <section className={styles.category}>
        <div className={styles.category_info}>
          <h2 className={styles.category_title}>ESSENTIALS</h2>
          <p className={styles.category_description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            incidunt id voluptatibus voluptatum nisi. Earum a autem laudantium
          </p>
        </div>
        <div className={styles.category_product}>
          <div className={styles.product_imageContainer}>
            <img
              src={testImage}
              alt="testing"
              className={styles.product_image}
            />
          </div>
        </div>
        <div className={styles.category_product}>
          <div className={styles.product_imageContainer}>
            <img
              src={testImage}
              alt="testing"
              className={styles.product_image}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Test;
