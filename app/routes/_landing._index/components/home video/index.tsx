import homeVideo from '~/assets/videos/FR-Video.mp4';
import heroImage from '~/assets/images/hero.webp';
import styles from './styles.module.css';
const HomeVideo = () => {
  return (
    <>
      <div className={styles.heroImageContainer}>
        <img src={heroImage} alt="FR-Hero" className={styles.heroImage} />
      </div>
      <video autoPlay loop className={styles.video}>
        <source src={homeVideo} />
      </video>
    </>
  );
};
export default HomeVideo;
