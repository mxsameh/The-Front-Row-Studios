import styles from './styles.module.css';
import {Image} from '@shopify/hydrogen';
import Slider from '~/components/slider';
import useScreenSize from '~/hooks/useScreenSize';

const ProductImages = ({images}) => {
  const {width} = useScreenSize();
  const vertical = width > 860;

  return (
    <>
      {vertical ? (
        <div className={styles.product_imageContainer}>
          {images.map((image) => (
            <Image
              key={image.id}
              data={image}
              className={styles.product_image}
              sizes="(min-width: 300px) 50vw"
            />
          ))}
        </div>
      ) : (
        <div className={styles.sliderContainer}>
          <Slider images={images} />
        </div>
      )}
    </>
  );
};
export default ProductImages;
