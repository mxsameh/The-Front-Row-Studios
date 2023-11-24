import styles from './styles.module.css';
import OrderRow from '../order row';

const OrdersTable = (props) => {
  const {orders} = props;

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          {/* TABLE HEADER */}
          <thead className={styles.table_head}>
            <tr className={styles.table_row}>
              <th className={styles.table_header}>order</th>
              <th className={styles.table_header}>date</th>
              <th className={styles.table_header}>payment</th>
              <th className={styles.table_header}>status</th>
              <th className={styles.table_header}>total</th>
            </tr>
          </thead>
          {/* TABLE BODY */}
          <tbody className={styles.table_body}>
            {orders.map((order) => (
              <OrderRow order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
