import styles from './styles.module.css';
import {Form, Link, NavLink} from '@remix-run/react';

const Navigation = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/account">
          Profile
        </Link>
        <NavLink className={styles.navLink} to="orders">
          Orders
        </NavLink>
        <NavLink className={styles.navLink} to="address-book">
          Address Book
        </NavLink>
      </nav>
      <Form method="POST" className={styles.logout}>
        <button type="submit" className={styles.logoutBtn}>
          Logout
        </button>
      </Form>
    </>
  );
};

export default Navigation;
