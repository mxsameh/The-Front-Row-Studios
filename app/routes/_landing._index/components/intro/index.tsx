import FR_Logo from '~/icons/FR_Logo';
import jacketImg from '~/assets/images/FR-Biba-Jacket.webp';
import styles from './styles.module.css';

const Intro = () => {
  return (
    <section className={styles.intro}>
      {/* LEFT SECTION TEXT */}
      <div className={styles.intro_left}>
        <div className={styles.intro_leftWrapper}>
          <h1 className={styles.title}>
            THE FRONT ROW STUDIOS: WHERE COOL MEETS CONFIDENCE
          </h1>
          <p className={styles.desc}>
            THE ULTIMATE DESTINATION FOR STRONG, FUN, EFFORTLESSLY SEXY WOMEN -
            WORLDWIDE. EACH COLLECTION IS AN EXPERIENCE, A WORLD ON IT’S OWN
            WITH YOU AT THE CENTER OF IT. EXPERIENCE & ENJOY THE RELATIONSHIP
            BETWEEN STATEMENT PIECES & TIMELESS MUST HAVES. WELCOME TO THE FRONT
            ROW.
          </p>
          <FR_Logo className={styles.logo} />
        </div>
      </div>

      {/* RIGHT SECTION IMAGE */}
      <div className={styles.intro_right}>
        <img src={jacketImg} alt="FR-Jacket" className={styles.intro_image} />
      </div>
    </section>
  );
};
export default Intro;
