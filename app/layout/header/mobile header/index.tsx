import styles from './styles/styles.module.css';
import FR_Emblem from '~/icons/FR_Emblem';
import Menu from './menu';
import {useState} from 'react';
import {Link} from '@remix-run/react';
import MenuIcon from './menu icon';

const MobileHeader = (props) => {
  const {cartCount, toogleCart} = props;
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      {isMenuOpened && <Menu toogleMenu={toogleMenu} />}
      <div className={styles.header_wrapper}>
        <MenuIcon toogleMenu={toogleMenu} isMenuOpened={isMenuOpened} />
        <Link to="/">
          <FR_Emblem className={styles.header_logo} />
        </Link>
        <button
          className={styles.header_cart}
          onClick={toogleCart}
        >{`Bag (${cartCount})`}</button>
      </div>
    </header>
  );
};

export default MobileHeader;
