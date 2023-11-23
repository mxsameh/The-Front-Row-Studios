import styles from './styles.module.css';
import Product from '../product';
import Slider from '~/components/slider';

const Category = (props) => {
  const {category} = props;
  const products = category.products.nodes;
  const sliderImages = products[0].images?.nodes?.slice(1);
  return (
    <section
      key={category.title}
      id={category.title?.toLowerCase()}
      className={styles.category}
    >
      {/* CATEGORY INFO */}
      <div className={styles.category_info}>
        <h2 className={styles.category_title}>{category.title}</h2>
        <p className={styles.category_description}>{category.description}</p>
      </div>
      {/* CATEGORY PRODUCTS */}
      {products.map((product) => (
        <Product key={product.handle} product={product} />
      ))}
      {products.length == 1 && (
        <div className={styles.sliderContainer}>
          <Slider images={sliderImages} />
        </div>
      )}
    </section>
  );
};

export default Category;
