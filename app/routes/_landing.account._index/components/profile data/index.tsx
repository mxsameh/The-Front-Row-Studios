import styles from './styles.module.css';
import {Form} from '@remix-run/react';
import classNames from 'classnames';

const ProfileData = ({customer, toogleEditMode}) => {
  const {firstName, lastName, email, phone} = customer;

  const handleEditClick = () => {
    toogleEditMode();
  };

  return (
    <>
      <div className={styles.profile_data}>
        {/* FIRST NAME */}
        <div className={classNames(styles.firstName, styles.info)}>
          <h3 className={styles.info_title}>first name</h3>
          <p className={styles.info_value}>{firstName}</p>
        </div>
        {/* Last NAME */}
        <div className={classNames(styles.lastName, styles.info)}>
          <h3 className={styles.info_title}>last name</h3>
          <p className={styles.info_value}>{lastName}</p>
        </div>
        {/* PHONE */}
        <div className={classNames(styles.phone, styles.info)}>
          <h3 className={styles.info_title}>phone</h3>
          <p className={styles.info_value}>{phone || '--'}</p>
        </div>
        {/* EMAIL */}
        <div className={classNames(styles.email, styles.info)}>
          <h3 className={styles.info_title}>email</h3>
          <p className={styles.info_value}>{email}</p>
        </div>
        {/* PASSWORD */}
        <div className={classNames(styles.password, styles.info)}>
          <h3 className={styles.info_title}>password</h3>
          <p className={styles.info_value}>*******</p>
        </div>
      </div>
      {/* buttons container */}
      <button
        type="button"
        className={classNames(styles.btn, styles.editBtn, 'animated-btn')}
        onClick={handleEditClick}
      >
        Edit
      </button>

      <Form method="POST" action="/account" className={styles.logout}>
        <button
          type="submit"
          className={classNames(styles.btn, styles.logoutBtn)}
        >
          Logout
        </button>
      </Form>
    </>
  );
};
export default ProfileData;
