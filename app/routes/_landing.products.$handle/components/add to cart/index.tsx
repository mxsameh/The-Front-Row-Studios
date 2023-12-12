import styles from './styles.module.css';
import {useFetcher} from '@remix-run/react';
import {CartForm} from '@shopify/hydrogen';
import classNames from 'classnames';
import LoadingLine from '~/components/loading line';
import removeTrailingZeros from '~/utils/removeTrailingZeros';

const AddToCart = (props) => {
const {price, productId, available, preOrder} = props
  let {amount, currencyCode} = price;

  amount = removeTrailingZeros(amount).toLocaleString();
  const fetcher = useFetcher();
  const state = fetcher.state;
  const submitting = state == 'submitting';

  const lines = [
    {
      merchandiseId: productId,
      quantity: 1,
    },
  ];

  const data = {
    action: CartForm.ACTIONS.LinesAdd,
    inputs: {lines},
  };
  // Add product to cart
  const addProductToCart = () => {
    fetcher.submit(
      {cartFormInput: JSON.stringify(data)},
      {method: 'POST', action: '/cart'},
    );
  };

  return (
    <>
      {!submitting ? (
        <fetcher.Form>
          {available ? (
            <button
              className={classNames(
                styles.btn,
                styles.addToBagBtn,
                'animated-btn',
              )}
              type="button"
              onClick={addProductToCart}
            >
              {preOrder?'Pre Order':'Add to Bag'}
              <span
                className={styles.product_price}
              >{`${amount} ${currencyCode}`}</span>
            </button>
          ) : (
            <button
              type="button"
              className={classNames(styles.btn, styles.disabledBtn)}
            >
              Out of Stock
            </button>
          )}
        </fetcher.Form>
      ) : (
        <div className={classNames(styles.btn, styles.loadingLine)}>
          <LoadingLine />
        </div>
      )}
    </>
  );
};

export default AddToCart;
