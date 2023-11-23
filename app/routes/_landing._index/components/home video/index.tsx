import homeVideo from '~/assets/videos/FR-Video.mp4';
import styles from './styles.module.css';
const HomeVideo = () => {
  return (
    <>
      <video autoPlay loop className={styles.video}>
        <source src={homeVideo} />
      </video>
    </>
  );
};
export default HomeVideo;
