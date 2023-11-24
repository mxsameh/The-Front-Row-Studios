import styles from './styles.module.css';
import classNames from 'classnames';

const AddressData = (props) => {
  const {address, toogleEditMode} = props;
  const {address1, country, city, zip, phone} = address;

  return (
    <>
      {/* ADDRESS DATA */}
      <div className={styles.address_data}>
        {/* COUNTRY */}
        <div className={classNames(styles.country, styles.info)}>
          <h3 className={styles.info_title}> country</h3>
          <p className={styles.info_value}>{country || '--'}</p>
        </div>
        {/* CITY */}
        <div className={classNames(styles.city, styles.info)}>
          <h3 className={styles.info_title}>city</h3>
          <p className={styles.info_value}>{city || '--'}</p>
        </div>
        {/* ZIP */}
        <div className={classNames(styles.zip, styles.info)}>
          <h3 className={styles.info_title}>zip code</h3>
          <p className={styles.info_value}>{zip || '--'}</p>
        </div>
        {/* ADDRESS 1 */}
        <div className={classNames(styles.address1, styles.info)}>
          <h3 className={styles.info_title}>address 1</h3>
          <p className={styles.info_value}>{address1 || '--'}</p>
        </div>
      </div>

      {/* EDIT BUTTON */}
      <button
        type="button"
        className={classNames(styles.editBtn, 'animated-btn')}
        onClick={toogleEditMode}
      >
        Edit
      </button>
    </>
  );
};
export default AddressData;
