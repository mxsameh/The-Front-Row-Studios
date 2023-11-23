import Header from '~/layout/header';
import Footer from '~/layout/footer';
import styles from './styles/styles.module.css';

import {Outlet, useOutletContext} from '@remix-run/react';
const Layout = () => {
  const {cart} = (useOutletContext() as any) || {};

  return (
    <div className={styles.root}>
      <Header cart={cart} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
