import Header from '~/layout/header';
import Footer from '~/layout/footer';
import styles from './styles/styles.module.css';

import {Outlet, useOutletContext} from '@remix-run/react';
const Layout = () => {
  const {cart,policies} = (useOutletContext() as any) || {};

  return (
    <div style={{display: 'none'}} className={styles.root}>
      <Header cart={cart} />
      <Outlet />
      <Footer policies={policies} />
    </div>
  );
};

export default Layout;
