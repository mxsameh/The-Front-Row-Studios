import styles from './styles/styles.module.css';
import {Link} from '@remix-run/react';
import DropdownMenu from './dropdown menu';
import FR_Emblem from '~/icons/FR_Emblem';
import Search_Icon from '~/icons/Search_Icon';
import Wishlist_Icon from '~/icons/Wishlist_Icon';
import {useContext} from 'react';
import {ICustomerContext, customerContext} from '~/context/customerContext';

const DesktopHeader = (props) => {
  const {cartCount, toogleCart} = props;
  const {customer} = useContext(customerContext) as ICustomerContext;
  const openHeaderMenu = () => {
    document.getElementById('header-dropdown-menu')?.classList.add('active');
  };

  return (
    <header className={styles.header}>
      <div className={styles.nav_wrapper}>
        <nav className={styles.nav}>
          <span
            data-z-index="1"
            className={styles.nav_link}
            onMouseEnter={openHeaderMenu}
            onClick={openHeaderMenu}
          >
            shop
          </span>
          <Link to="/selected-for-you" className={styles.nav_link}>
            selected for you
          </Link>
          <Link to="/collections" className={styles.nav_link}>
            collections
          </Link>
        </nav>
      </div>

      <Link to="/" data-z-index="1">
        <FR_Emblem className={styles.emblemLogo} />
      </Link>

      <div className={styles.nav_wrapper}>
        <nav className={styles.nav}>
          <Link className={styles.nav_link} to="/login">
            {customer ? 'My Accout' : 'Login'}
          </Link>
          <button
            className={styles.nav_link}
            onClick={toogleCart}
          >{`Bag (${cartCount})`}</button>
        </nav>
        <nav data-z-index="1" className={styles.ctas}>
          <Search_Icon className={styles.ctas_icon} />
          <Wishlist_Icon className={styles.ctas_icon} />
        </nav>
      </div>
      <DropdownMenu />
    </header>
  );
};

export default DesktopHeader;
