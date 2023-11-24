import styles from './styles.module.css';
import HomeVideo from './components/home video';
import SelectedProducts from './components/selected products';
import wallPoster from '~/assets/images/FR-wall-poster.webp';
import Welcome from './components/welcome';
import Intro from './components/intro';

const HomePage = (props) => {
  const {products} = props;
  return (
    <main>
      <HomeVideo />
      <Intro />
      <section className={styles.wallPoster}>
        <img src={wallPoster} alt="" className={styles.wallPoster_img} />
      </section>
      <Welcome />
      <SelectedProducts products={products} />
    </main>
  );
};

export default HomePage;
