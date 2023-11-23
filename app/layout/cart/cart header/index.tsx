import styles from './styles.module.css';
import Close_Icon from '~/icons/Close_Icon';

const CartHeader = (props) => {
  const {count, toogleCart} = props;
  return (
    <div className={styles.cart_header}>
      <h2 className={styles.header_title}>bag</h2>
      <span className={styles.header_count}>({count})</span>
      <div className={styles.header_icon} onClick={toogleCart}>
        <Close_Icon className={styles.closeIcon} />
      </div>
    </div>
  );
};
export default CartHeader;
