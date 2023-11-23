import styles from './styles.module.css';
import {Link} from '@remix-run/react';
import classNames from 'classnames';
import {headerLeftCategories, headerRightCategories} from '~/data/header-menu';

const Menu = (props) => {
  const {toogleMenu} = props;
  const handleClick = (e) => {
    if (e.target.tagName == 'A') toogleMenu();
  };
  return (
    <div className={styles.menu} onClick={handleClick}>
      {/* NAV MENU */}
      <nav className={styles.menu_nav}>
        {/* LEFT CATEGORIES */}
        <div className={styles.categories}>
          <Link
            to="/shop-all"
            className={classNames(styles.link, styles.f_md_it)}
          >
            shop all
          </Link>
          {headerLeftCategories.map((category) => (
            <Link
              key={category}
              to={`/shop?Category=${category.replaceAll(' ', '-')}`}
              className={styles.link}
            >
              {category}
            </Link>
          ))}
        </div>

        {/* RIGHT CATEGORIES */}
        <div className={styles.categories}>
          {headerRightCategories.map((category) => (
            <Link
              key={category}
              to={`/shop?Category=${category.replaceAll(' ', '-')}`}
              className={styles.link}
            >
              {category}
            </Link>
          ))}

          <nav className={styles.nav}>
            <Link
              to="/collections"
              className={classNames(styles.link, styles.f_md_it)}
            >
              collections
            </Link>
            <Link to="" className={classNames(styles.link, styles.f_md_it)}>
              members & family
            </Link>
          </nav>
        </div>
      </nav>

      {/* MENU FOOTER */}
      <div className={styles.menu_footer}>
        <nav className={styles.footer_nav}>
          <Link to="/login" className={styles.footer_link}>
            Login
          </Link>
          <Link to="/wishlist" className={styles.footer_link}>
            Wishlist
          </Link>
          <Link to="/contact-us" className={styles.footer_link}>
            Contact Us
          </Link>
        </nav>
        <div className={styles.footer_cr}>
          <span>© 2023</span>
          <span>The Front Rows Studios</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
