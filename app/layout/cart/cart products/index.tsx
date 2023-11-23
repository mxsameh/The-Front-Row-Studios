import styles from './styles.module.css';
import {CartForm, Image} from '@shopify/hydrogen';

const CartProductsList = ({products}) => {
  return (
    <div className={styles.cart_productsList}>
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <div className={styles.product_image}>
            <Image
              data={product.image}
              sizes="(min-width: 120px) 30%"
              className={styles.img}
            />
          </div>
          {/* PRODUCT DETAILS */}
          <div className={styles.product_details}>
            {/* PRODUCT NAME */}
            <h3 className={styles.product_title}>{product.title}</h3>
            {/* PRODUCT Options */}
            <div className={styles.product_options}>
              {product.selectedOptions.map((option) => (
                <div key={option.name} className={styles.option}>
                  <h4 className={styles.option_name}>{option.name}</h4>
                  <span className={styles.option_value}>{option.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.product_quantity}>
              <CartForm
                route="/cart"
                action={CartForm.ACTIONS.LinesUpdate}
                inputs={{
                  lines: [
                    {
                      id: product.id,
                      quantity: Math.max(0, product.quantity - 1),
                    },
                  ],
                }}
              >
                <button type="submit" className={styles.quantity_btn}>
                  -
                </button>
              </CartForm>
              <span className={styles.quantity}>{product.quantity}</span>
              <CartForm
                route="/cart"
                action={CartForm.ACTIONS.LinesUpdate}
                inputs={{
                  lines: [{id: product.id, quantity: product.quantity + 1}],
                }}
              >
                <button className={styles.quantity_btn}>+</button>
              </CartForm>
            </div>
            {/* PRODUCT SUMMARY ( REMOVE BUTTON & TOTAL PRICE) */}
            <div className={styles.product_summary}>
              <CartForm
                route="/cart"
                action={CartForm.ACTIONS.LinesRemove}
                inputs={{
                  lineIds: [product.id],
                }}
              >
                <button type="submit" className={styles.product_removeBtn}>
                  remove
                </button>
              </CartForm>
              <span className={styles.product_total}>
                {`${product.total.amount} ${product.total.currencyCode}`}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProductsList;
