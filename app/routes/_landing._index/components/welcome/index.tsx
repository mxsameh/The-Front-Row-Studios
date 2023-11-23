import styles from './styles.module.css';
import frGoldonBlack from '~/assets/images/black-gold-FR.webp';

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_left}>
        <img
          src={frGoldonBlack}
          alt="FR-silk-skirt-close"
          className={styles.image}
        />
      </div>
      <div className={styles.welcome_right}>
        <h1 className={styles.title}>WELCOME TO THE FRONT ROW.</h1>
        <p className={styles.desc}>
          In the finest fabrics & the sexiest silhouettes, we present to you the
          power of sensuality through our first Fall/Winter collection - "THE
          FRONT ROW STUDIOS". Following the female body & gaze, this collection
          embodies a sense of luxury, confidence & indulgence. Intertwined with
          our statement pieces are timeless essentials that echo through eras.
          Handmade & tailored to perfection, these pieces are made just for you.
        </p>
      </div>
    </section>
  );
};
export default Welcome;
