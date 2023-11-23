import homeVideo from '~/assets/videos/FR-Video.mp4';
import heroImage from '~/assets/images/hero.webp';
import styles from './styles.module.css';
import {useEffect, useRef} from 'react';
const HomeVideo = () => {
  const vidRef = useRef() as any;
  useEffect(() => {
    vidRef.current?.play();
  }, []);
  const handleClick = () => {
    vidRef.current?.play();
  };
  return (
    <>
      <div className={styles.heroImageContainer}>
        <img src={heroImage} alt="FR-Hero" className={styles.heroImage} />
      </div>
      <video
        autoPlay
        loop
        className={styles.video}
        ref={vidRef}
        onClick={handleClick}
      >
        <source src={homeVideo} />
      </video>
    </>
  );
};
export default HomeVideo;
