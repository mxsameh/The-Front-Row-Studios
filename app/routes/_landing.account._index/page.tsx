import styles from './styles.module.css';
import {useState, useContext} from 'react';
import ProfileData from './components/profile data';
import EditableProfileData from './components/editable profile data';
import {ICustomerContext, customerContext} from '~/context/customerContext';

const ProfilePage = () => {
  const {customer} = useContext(customerContext) as ICustomerContext;
  const [editMode, setEditMode] = useState(false);
  const toogleEditMode = () => {
    setEditMode((prev) => !prev);
  };
  if (!customer) return <div>loading...</div>;

  return (
    <div className={styles.profile}>
      <div className={styles.divider} />
      {!editMode ? (
        <ProfileData customer={customer} toogleEditMode={toogleEditMode} />
      ) : (
        <EditableProfileData toogleEditMode={toogleEditMode} />
      )}
    </div>
  );
};

export default ProfilePage;
