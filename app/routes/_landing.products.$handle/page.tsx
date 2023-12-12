import styles from './styles/styles.module.css';
import ProductOptions from './components/product options';
import AddToCart from './components/add to cart';
import ProductImages from './components/product images';

interface Iprops {
  product;
}

const Product_Page = ({product}: Iprops) => {
  let {
    title,
    description,
    tags,
    descriptionHtml,
    images,
    options,
    price,
    availableForSale,
    selectedOptions,
  } = product;

  // console.log(tags);

  const preOrder = tags.includes('Pre Order');

  return (
    <>
      <div className={styles.product}>
        <ProductImages images={images} />
        <div className={styles.product_data}>
          {/**
           * Product Title
           */}
          <h2 className={styles.product_title}>{title}</h2>
          {/**
           * Product Description
           */}
          <div className={styles.info}>
            <div className={styles.info_leftWrapper}>
              <h3 className={styles.info_title}>description</h3>
            </div>
            <div className={styles.info_rightWrapper}>
              <div
                className={styles.product_description}
                dangerouslySetInnerHTML={{__html: descriptionHtml}}
              />
            </div>
          </div>

          {/**
           * Product Options
           */}
          <ProductOptions options={options} selectedOptions={selectedOptions} />

          {/**
           * Add to Bag Buttton
           */}

          <AddToCart
            price={price}
            productId={product.id}
            available={availableForSale}
            preOrder={preOrder}
          />

          {/**
           * PRODUCT DETAILS
           */}
          <div className={styles.info}>
            <div className={styles.info_leftWrapper}>
              <span className={styles.product_extraInfo}>Details</span>
              <span className={styles.product_extraInfo}>Care</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_Page;
