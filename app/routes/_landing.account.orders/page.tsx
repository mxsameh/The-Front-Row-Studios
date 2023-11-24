import OrdersTable from './components/orders table';

const Orders = (props) => {
  const {orders} = props;

  return (
    <>
      {/* <p className={styles.introText}>
        Your current and previous orders.
        <br />
        Note: inorder to Edit/Cancel and order you’ll have to contact the
        customer service.
      </p> */}

      <OrdersTable orders={orders} />
    </>
  );
};

export default Orders;
