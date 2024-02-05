import OrdersTable from './components/orders table';
import styles from './styles.module.css';

const Orders = (props) => {
  const {orders} = props;
  const hasOrders = orders.length ? true : false;
  return (
    <>
      {hasOrders ? (
        <OrdersTable orders={orders} />
      ) : (
        <h3 className={styles.noOrdersTitle}>You don't have any orders yet!</h3>
      )}
    </>
  );
};

export default Orders;
