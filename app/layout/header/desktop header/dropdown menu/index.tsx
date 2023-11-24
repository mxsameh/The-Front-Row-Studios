import styles from './styles.module.css';
import classNames from 'classnames';
import {Link} from '@remix-run/react';
import {headerLeftCategories, headerRightCategories} from '~/data/header-menu';

const DropdownMenu = () => {
  const closeMenu = () => {
    document.getElementById('header-dropdown-menu')?.classList.remove('active');
  };
  const handleClick = (e) => {
    if (e.target.tagName == 'A') closeMenu();
  };
  return (
    <>
      <div id="header-dropdown-menu" className={styles.dropdown}>
        <div className={styles.dropdown_wrapper} onMouseLeave={closeMenu}>
          {/* NAV */}
          <section
            className={classNames(styles.dropdown_section, styles.leftSection)}
            onClick={handleClick}
          >
            <div className={styles.categories}>
              <Link
                to="/shop-all"
                className={classNames(styles.link, styles.f_md_it)}
              >
                shop all
              </Link>

              {/* LEFT CATEGORIES */}
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
                <span className={classNames(styles.link, styles.f_md_it)}>
                  collections
                </span>
                <span className={classNames(styles.link, styles.f_md_it)}>
                  friends & family
                </span>
              </nav>
            </div>
          </section>

          {/* IMAGES */}
          <section
            className={classNames(styles.dropdown_section, styles.rightSection)}
          ></section>
        </div>
        <button type="button" className={styles.closeBtn} onClick={closeMenu} />
      </div>
    </>
  );
};

export default DropdownMenu;
