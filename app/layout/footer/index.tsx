import styles from './styles.module.css';
import Newsletter from './newsletter';
import {Link} from '@remix-run/react';
import {IG_LINK, PINTREST_LINK, TIKTOK_LINK} from '~/data/links';
import classNames from 'classnames';
import {useContext} from 'react';
import {ImodalContext, modalContext} from '~/context/modalContext';
import Modal from '~/components/modal';

interface Iprops {
  policies: any;
}
const Footer = (props: Iprops) => {
  const {policies} = props;
  const {openModal} = useContext(modalContext) as ImodalContext;
  const handleClick = () => {
    console.log('poli', policies);
    const modal = {title: 'Shipping Policies', body: policies.shippingPolicy};
    openModal(modal);
  };
  return (
    <>
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
            <li className={styles.footer_link} onClick={handleClick}>
              Shipping Policies
            </li>
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
      <Modal />
    </>
  );
};

export default Footer;
