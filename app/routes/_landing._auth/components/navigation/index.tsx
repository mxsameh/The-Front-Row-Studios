import styles from './styles.module.css';
import {NavLink} from '@remix-run/react';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/login" className={styles.nav_link}>
        login
      </NavLink>
      <NavLink to="register" className={styles.nav_link}>
        register
      </NavLink>
    </nav>
  );
};

export default Navigation;
