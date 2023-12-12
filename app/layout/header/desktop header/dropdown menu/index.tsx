import styles from './styles.module.css';
import classNames from 'classnames';
import {useState} from 'react';
import {Link} from '@remix-run/react';
import {headerLeftCategories, headerRightCategories} from '~/data/header-menu';
import topsImage from '~/assets/images/menu/tops-menu.png';
import dressesImage from '~/assets/images/menu/dresses.png';
import setsImage from '~/assets/images/menu/sets.png';
import skirtsImage from '~/assets/images/menu/skirts.png';
import outerwearImage from '~/assets/images/menu/outerwear.png';
import essentialsImage from '~/assets/images/menu/essentials.png';

const menuImages = [
  {category: 'Tops', img: topsImage},
  {category: 'Dresses', img: dressesImage},
  {category: 'Sets', img: setsImage},
  {category: 'Skirts', img: skirtsImage},
  {category: 'Outerwear', img: outerwearImage},
  {category: 'Star Products', img: outerwearImage},
  {category: 'Essentials', img: essentialsImage},
];

const DropdownMenu = () => {
  const closeMenu = () => {
    document.getElementById('header-dropdown-menu')?.classList.remove('active');
  };
  const handleClick = (e) => {
    if (e.target.tagName == 'A') closeMenu();
  };
  const [hoveredLink, sethoveredLink] = useState('Dresses');

  // Check images styles
  const getImageStyles = (category: string) => {
    const isActive = category == hoveredLink;

    let imageStyles = isActive
      ? classNames(styles.dropdown_image, styles.activeImage)
      : classNames(styles.dropdown_image);

    return imageStyles;
  };
  return (
    <>
      <div id="header-dropdown-menu" className={styles.dropdown}>
        <div className={styles.dropdown_wrapper} onMouseLeave={closeMenu}>
          {/* LEFT SECTION NAV */}
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
                  onMouseEnter={() => sethoveredLink(category)}
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
                  onMouseEnter={() => sethoveredLink(category)}
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

          {/* RIGHT SECTION IMAGES */}
          <section
            className={classNames(styles.dropdown_section, styles.rightSection)}
          >
            <div className={styles.dropdown_imageWrapper}>
              {menuImages.map(({category, img}, i) => (
                <img
                  key={hoveredLink + i}
                  src={img}
                  alt=""
                  className={getImageStyles(category)}
                />
              ))}
            </div>
          </section>
        </div>
        <button type="button" className={styles.closeBtn} onClick={closeMenu} />
      </div>
    </>
  );
};

export default DropdownMenu;
