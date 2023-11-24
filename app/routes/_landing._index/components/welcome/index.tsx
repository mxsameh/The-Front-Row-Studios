import styles from './styles.module.css';
import frGoldonBlack from '~/assets/images/black-gold-FR.webp';

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      {/* WELCOME LEFT IMAGE  */}
      <div className={styles.welcome_left}>
        <img
          src={frGoldonBlack}
          alt="FR-silk-skirt-close"
          className={styles.image}
        />
      </div>

      {/* WELCOME RIGTH IMAGE  */}
      <div className={styles.welcome_right}>
        <div className={styles.welcome_rightWrapper}>
          <h1 className={styles.title}>WELCOME TO THE FRONT ROW.</h1>
          <p className={styles.description}>
            IN THE FINEST FABRICS & THE SEXIEST SILHOUETTES, WE PRESENT TO YOU
            THE POWER OF SENSUALITY THROUGH OUR FIRST FALL/WINTER COLLECTION -
            "THE FRONT ROW STUDIOS". FOLLOWING THE FEMALE BODY & GAZE, THIS
            COLLECTION EMBODIES A SENSE OF LUXURY, CONFIDENCE & INDULGENCE.
          </p>
          <p className={styles.description}>
            INTERTWINED WITH OUR STATEMENT PIECES ARE TIMELESS ESSENTIALS THAT
            ECHO THROUGH ERAS. HANDMADE & TAILORED TO PERFECTION, THESE PIECES
            ARE MADE JUST FOR YOU.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Welcome;
