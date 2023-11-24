import styles from './styles.module.css';
import {Outlet} from '@remix-run/react';
import {ActionFunctionArgs, redirect} from '@shopify/remix-oxygen';
import {useContext} from 'react';
import {ICustomerContext, customerContext} from '~/context/customerContext';
import Navigation from './components/navigation';

/**
 * Actions
 */
export async function action({context}: ActionFunctionArgs) {
  // Check if user already logged in
  const {session} = context;
  session.unset('customerAccessToken');
  return redirect('/login', {
    headers: {
      'Set-Cookie': await session.commit(),
    },
  });
}

/**
 * Route (Layout)
 */
export default function index() {
  const {customer} = useContext(customerContext) as ICustomerContext;
  const name = customer?.firstName || '';

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.introText}>
          Hey {name}. Here you can keep track of your recent orders, as well as
          view and edit your account
        </p>

        {/* MOBILE NAV  */}
        <div className={styles.navContainer}>
          <Navigation />
        </div>
        {/* DIVIDER */}
        <div className={styles.divider}/>
        {/* ACCOUNT BODY */}
        <section className={styles.account_body}>
          <Outlet />
        </section>
      </main>
      <aside className={styles.aside}>
        <Navigation />
      </aside>
    </div>
  );
}
