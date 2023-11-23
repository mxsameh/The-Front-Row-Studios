import styles from './styles.module.css';
import FR_Logo from '~/icons/FR_Logo';
import jacketImg from '~/assets/images/FR-Biba-Jacket.webp';
import HomeVideo from './components/home video';
import SelectedProducts from './components/selected products';
import wallPoster from '~/assets/images/FR-wall-poster.webp';
import Welcome from './components/welcome';

const HomePage = (props) => {
  const {products} = props;
  return (
    <main>
      <HomeVideo />
      <section className={styles.intro}>
        <div className={styles.intro_left}>
          <h1 className={styles.title}>
            THE FRONT ROW STUDIOS: WHERE COOL MEETS CONFIDENCE
          </h1>
          <p className={styles.desc}>
            THE ultimate destination for strong, fun, effortlessly sexy women -
            worldwide. each collection is an experience, a world on it’s own
            with you at the center of it. experience & enjoy the relationship
            between statement pieces & timeless must haves. welcome to the front
            row.
          </p>
          <FR_Logo className={styles.logo} />
        </div>
        <div className={styles.intro_right}>
          <div className={styles.imageContainer}>
            <img src={jacketImg} alt="FR-Jacket" />
          </div>
        </div>
      </section>
      <section className={styles.wallPoster}>
        <img src={wallPoster} alt="" className={styles.wallPoster_img} />
      </section>
      <Welcome />
      <SelectedProducts products={products} />
    </main>
  );
};

export default HomePage;
