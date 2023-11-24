import styles from './styles/styles.module.css';
import {ICustomerContext, customerContext} from '~/context/customerContext';
import {useContext, useState} from 'react';
import EditableAddressData from './components/editable address data';
import AddressData from './components/address data';

const AddressBook = () => {
  const {customer} = useContext(customerContext) as ICustomerContext;

  const defaultAddress = customer?.defaultAddress;
  const [editMode, setEditMode] = useState(false);
  const toogleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <>
      {/* <p className={styles.introText}>
        Your orders will be shipped to your default address, make sure it is the
        right shippment address before ordering.
      </p> */}
      {!editMode ? (
        <AddressData address={defaultAddress} toogleEditMode={toogleEditMode} />
      ) : (
        <EditableAddressData toogleEditMode={toogleEditMode} />
      )}
    </>
  );
};

export default AddressBook;
