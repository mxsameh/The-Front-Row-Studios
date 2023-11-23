import styles from './styles.module.css';
import {CartForm} from '@shopify/hydrogen';
import classNames from 'classnames';
import removeTrailingZeros from '~/utils/removeTrailingZeros';

const CartSummary = ({cost, checkoutUrl}) => {
  let {amount, currencyCode} = cost.totalAmount;

  amount = removeTrailingZeros(amount).toLocaleString();
  return (
    <div className={styles.cart_summary}>
      <div className={styles.total}>
        <h3 className={styles.total_title}>total</h3>
        <span
          className={styles.total_amount}
        >{`${amount} ${currencyCode}`}</span>
      </div>

      <div className={styles.checkout}>
        <p className={styles.checkout_info}>
          Shipping & Taxes are calculated at checkout
        </p>
        <CartForm route="/cart" action={CartForm.ACTIONS.BuyerIdentityUpdate}>
          <button
            type="submit"
            name="redirectTo"
            value={checkoutUrl}
            className={classNames(styles.checkout_btn, 'animated-btn')}
          >
            checkout
          </button>
        </CartForm>
      </div>
    </div>
  );
};

export default CartSummary;
