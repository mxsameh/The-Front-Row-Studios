import styles from './styles/styles.module.css';
import CartSummary from './cart summary';
import CartProductsList from './cart products';
import getCartProducts from './utils/getCartProducts';
import CartEmpty from './empty';
import CartHeader from './cart header';
import classNames from 'classnames';

const CartAside = (props) => {
  const {cart, isCartOpened, toogleCart} = props;
  const products = getCartProducts(cart?.lines?.nodes);
  const count = cart?.totalQuantity || 0;
  const isCartEmpty = !cart || !products.length;

  const cartClasses = isCartOpened
    ? classNames(styles.overlay, styles.opened)
    : classNames(styles.overlay);
  return (
    <div id="cart" aria-modal className={cartClasses} role="dialog">
      {/* CLOSE BUTTON */}
      <button type="button" className={styles.closeBtn} onClick={toogleCart} />

      {/* CART */}
      <aside className={styles.cart}>
        <CartHeader count={count} toogleCart={toogleCart} />
        <div className={styles.cart_body}>
          {isCartEmpty ? (
            <CartEmpty toogleCart={toogleCart} />
          ) : (
            <>
              <CartProductsList products={products} />
              <CartSummary cost={cart.cost} checkoutUrl={cart.checkoutUrl} />
            </>
          )}
        </div>
      </aside>
    </div>
  );
};

export default CartAside;
