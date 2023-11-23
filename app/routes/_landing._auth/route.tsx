import styles from './styles.module.css';
import {Outlet} from '@remix-run/react';
import Navigation from './components/navigation';

export async function loader() {
  return null;
}

export default function index() {
  return (
    <div className={styles.page}>
      <Navigation />
      <Outlet />
    </div>
  );
}
