import {Link, Outlet} from '@remix-run/react';
import FR_Emblem from '~/icons/FR_Emblem';
import styles from './styles.module.css';

export default function index() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Link to="/" className={styles.header_logo}>
          <FR_Emblem className={styles.logo} />
        </Link>
      </header>
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.footer_cr}>THE FRONT ROW STUDIOS &copy; 2023</p>
      </footer>
    </div>
  );
}
