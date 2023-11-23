import styles from './styles.module.css';
import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

const MenuIcon = (props) => {
  const {toogleMenu, isMenuOpened} = props;

  let tl = useRef(
    gsap.timeline({
      paused: true,
      defaults: {duration: 0.2, ease: 'power2.out'},
    }),
  );

  const setTimeLine = () => {
    tl.current
      .to(`span[data-menu-line='1']`, {
        y: 5.5,
      })
      .to(
        `span[data-menu-line='2']`,
        {
          y: -5.5,
        },
        '<',
      )
      .set(`span[data-menu-line='1']`, {
        width: 32,
      })
      .to(`span[data-menu-line='1']`, {
        rotate: -135,
      })
      .to(
        `span[data-menu-line='2']`,
        {
          rotate: -45,
        },
        '<',
      );
  };

  useEffect(() => {
    setTimeLine();
  }, []);

  useEffect(() => {
    if (isMenuOpened) tl.current.play(0);
    else tl.current.reverse();
  }, [isMenuOpened]);

  return (
    <div className={styles.menuIcon} onClick={toogleMenu}>
      <span data-menu-line="1" className={styles.icon_line} />
      <span data-menu-line="2" className={styles.icon_line} />
    </div>
  );
};

export default MenuIcon;
