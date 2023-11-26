import styles from './styles.module.css';
import Newsletter from './newsletter';
import {Link} from '@remix-run/react';
import {IG_LINK, PINTREST_LINK, TIKTOK_LINK} from '~/data/links';
import classNames from 'classnames';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Newsletter />

      <div className={styles.footer_divider} />

      <div className={styles.footer_bottomWrapper}>
        <ul className={styles.footer_list}>
          <li className={styles.footer_link}>Press</li>
          <li className={styles.footer_link}>Contact</li>
          <li className={styles.footer_link}>Customer Service</li>
        </ul>
        <ul className={styles.footer_list}>
          <li className={styles.footer_link}>FAQ</li>
          <li className={styles.footer_link}>Shipping Policies</li>
          <li className={styles.footer_link}>Exchanges & Returns</li>
        </ul>
        <div
          className={classNames(styles.footer_list, styles.footer_socialList)}
        >
          <Link to={IG_LINK} className={styles.footer_link}>
            Instagram
          </Link>
          <Link to={PINTREST_LINK} className={styles.footer_link}>
            Pintrest
          </Link>
          <Link to={TIKTOK_LINK} className={styles.footer_link}>
            Tiktok
          </Link>
        </div>
        <div className={styles.footer_cr}>
          <span className={styles.footer_crYear}>© 2023</span>
          <span>THE FRONT ROW STUDIOS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
