import styles from './styles.module.css';
import removeTrailingZeros from '~/utils/removeTrailingZeros';
import formatOrderDate from '../../utils/formatOrderDate';
import getCurrencySymbol from '~/utils/getCurrencySymbol';

const OrderRow = ({order}) => {
  const {name, processedAt, financialStatus, fulfillmentStatus, totalPrice} =
    order;

  const {amount, currencyCode} = totalPrice;
  const date = formatOrderDate(processedAt);
  const paymentStatus = financialStatus;
  const total = removeTrailingZeros(amount).toLocaleString();
  const currencySymbol = getCurrencySymbol(currencyCode);

  return (
    <tr className={styles.table_row}>
      <td className={styles.table_data}>{name}</td>
      <td className={styles.table_data}>{date}</td>
      <td className={styles.table_data}>{paymentStatus}</td>
      <td className={styles.table_data}>{fulfillmentStatus}</td>
      <td className={styles.table_data}>{`${total}${currencySymbol}`}</td>
    </tr>
  );
};

export default OrderRow;
