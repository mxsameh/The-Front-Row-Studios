import styles from './styles.module.css';
import {useFetcher} from '@remix-run/react';
import classNames from 'classnames';
import {useContext, useEffect} from 'react';
import PhoneInput from 'react-phone-number-input';
import LoadingLine from '~/components/loading line';
import {ICustomerContext, customerContext} from '~/context/customerContext';

const EditableAddressData = (props) => {
  const {toogleEditMode} = props;
  const {customer} = useContext(customerContext) as ICustomerContext;

  const {id, address1, country, city, zip} = customer?.defaultAddress;

  const fetcher = useFetcher();
  const submitting = fetcher.state == 'submitting';

  const data = fetcher.data as any;
  const error = data?.error;

  useEffect(() => {
    if (data?.customer) toogleEditMode();
  }, [data]);

  const handleCancelClick = () => {
    toogleEditMode();
  };

  return (
    <fetcher.Form method="PUT" className={styles.address_form}>
      {/* ID */}
      <input type="hidden" hidden name="addressId" value={id} />
      {/* COUNTRY */}
      <fieldset className={classNames(styles.country, styles.fieldset)}>
        <label htmlFor="country" className={styles.label}>
          country
        </label>
        <input
          id="country"
          name="country"
          type="text"
          defaultValue={country}
          className={styles.input}
        />
      </fieldset>

      {/* CITY */}
      <fieldset className={classNames(styles.city, styles.fieldset)}>
        <label htmlFor="city" className={styles.label}>
          city
        </label>
        <input
          id="city"
          name="city"
          type="text"
          defaultValue={city}
          className={styles.input}
        />
      </fieldset>

      {/* zip */}
      <fieldset className={classNames(styles.zip, styles.fieldset)}>
        <label htmlFor="zip" className={styles.label}>
          zip code
        </label>
        <input
          id="zip"
          name="zip"
          type="zip"
          defaultValue={zip}
          className={styles.input}
        />
      </fieldset>

      {/* ADDRESS 1 */}
      <fieldset className={classNames(styles.address, styles.fieldset)}>
        <label htmlFor="address1" className={styles.label}>
          address
        </label>
        <input
          id="address1"
          name="address1"
          type="text"
          defaultValue={address1}
          className={styles.input}
        />
      </fieldset>

      {/* ERROR */}
      <p className={styles.error}>{error}&nbsp;</p>

      {/* CACNCEL BUTTON */}
      <button
        className={classNames(styles.btn, styles.cancelBtn)}
        onClick={handleCancelClick}
      >
        Cancel
      </button>

      {/* SAVE BUTTON */}
      {!submitting ? (
        <button
          type="submit"
          className={classNames(styles.btn, styles.saveBtn, 'animated-btn')}
        >
          Sav
        </button>
      ) : (
        <div className={classNames(styles.btn, styles.loadingLine)}>
          <LoadingLine />
        </div>
      )}
    </fetcher.Form>
  );
};
export default EditableAddressData;
