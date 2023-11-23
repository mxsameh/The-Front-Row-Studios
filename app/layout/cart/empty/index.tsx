import styles from './styles.module.css';
import classNames from 'classnames';

const CartEmpty = ({toogleCart}) => {
  return (
    <div className={styles.cart_empty}>
      <h2 className={styles.empty_title}>Your shopping bag is empty</h2>
      <button
        className={classNames(styles.empty_btn, 'animated-btn')}
        onClick={toogleCart}
      >
        continue shopping
      </button>
    </div>
  );
};

export default CartEmpty;
