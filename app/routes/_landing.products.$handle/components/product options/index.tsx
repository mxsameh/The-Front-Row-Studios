import styles from './styles.module.css';
import {Link, useLocation, useNavigation} from '@remix-run/react';
import classNames from 'classnames';

import colorsCodes from '~/data/colors';

interface Iprops {
  options: any;
  selectedOptions: any;
}

const ProductOptions = ({options, selectedOptions}: Iprops) => {
  const {colors, sizes} = options;
  const {color, size} = selectedOptions;
  const {pathname, search} = useLocation();

  const defaultSearchParams = new URLSearchParams(search);
  defaultSearchParams.set('Color', color);
  defaultSearchParams.set('Size', size);

  /**
   * Update Selected Options when Link Changes
   */
  const navigation = useNavigation();

  const searchParams = navigation.location
    ? new URLSearchParams(navigation.location.search)
    : defaultSearchParams;

  const selectedColor = searchParams.get('Color');
  const selectedSize = searchParams.get('Size');
  return (
    <>
      {/**
       * Product Colors
       */}
      <div className={styles.info}>
        <div className={styles.info_leftWrapper}>
          <h3 className={styles.info_title}>color</h3>
          <span className={styles.product_selectedColor}>{selectedColor}</span>
        </div>
        <div className={styles.info_rightWrapper}>
          <div className={styles.product_colorsList}>
            {colors.values.map((color) => {
              const colorCode = colorsCodes[color];
              const linkSearchParams = new URLSearchParams(searchParams);
              linkSearchParams.set(colors.name, color);
              const link = `${pathname}?${linkSearchParams.toString()}`;
              const isSelected = color == selectedColor;
              return (
                <Link
                  to={link}
                  replace
                  preventScrollReset
                  key={color}
                  className={classNames(
                    styles.product_color,
                    `${isSelected ? styles.selectedColor : ''}`,
                  )}
                >
                  <span
                    style={{backgroundColor: colorCode}}
                    className={styles.color}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/**
       * Product Sizes
       */}
      <div className={styles.info}>
        <div className={styles.info_leftWrapper}>
          <h3 className={styles.info_title}>size</h3>
          <span className={styles.sizeGuide}>size guide</span>
        </div>
        <div className={styles.info_rightWrapper}>
          <div className={styles.product_sizesList}>
            {sizes.values.map((size) => {
              const isSelected = size == selectedSize;
              const linkSearchParams = new URLSearchParams(searchParams);
              linkSearchParams.set(sizes.name, size);
              const link = `${pathname}?${linkSearchParams.toString()}`;
              return (
                <Link
                  to={link}
                  key={size}
                  replace
                  preventScrollReset
                  className={classNames(
                    styles.product_size,
                    `${isSelected ? styles.selectedSize : ''}`,
                  )}
                >
                  {size}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOptions;
