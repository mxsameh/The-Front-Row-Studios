import {Image} from '@shopify/hydrogen';
import styles from './styles.module.css';
import testImage from '~/assets/images/product1.png';
import Product from '../../routes/_landing.shop/components/product';
import Category from '../../routes/_landing.shop/components/category';

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
      <h1>testgin</h1>
      <Category category={category} />
    </div>
  );
};
export default Test;

// const Product = ({product}) => {
//   // console.log(product);
//   const images = product.images.nodes;
//   return (
//     <div className={styles.category_product}>
//       <div className={styles.product_imageContainer}>
//         <Image
//           data={images[0]}
//           className={styles.product_image}
//           sizes="(min-width: 300px) 33vw, 50vw"
//         />
//       </div>
//     </div>
//   );
// };
