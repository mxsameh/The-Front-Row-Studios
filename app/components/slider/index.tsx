import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import styles from './styles.module.css';
import Chevron_Icon from '~/icons/Chevron_Icon';
import classNames from 'classnames';
import {Image} from '@shopify/hydrogen';
import {Fragment} from 'react';

const Slider = (props) => {
  const {images} = props;
  const nextBtnId = 'slider-next-btn';
  const prevBtnId = 'slider-prev-btn';

  return (
    <>
      <Swiper
        // className={styles.swiper}
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{nextEl: `#${nextBtnId}`, prevEl: `#${prevBtnId}`}}
      >
        {images.map((image) => (
          <Fragment key={image.id}>
            <SwiperSlide>
              <Image
                data={image}
                className={styles.image}
                sizes="(min-width: 300px) 100vw"
              />
            </SwiperSlide>
          </Fragment>
        ))}
        {/* SLIDER CONTROLS */}
        <div className={styles.slider_controls}>
          <Chevron_Icon
            id={prevBtnId}
            className={classNames(styles.slider_arrow, styles.leftArrow)}
          />
          <Chevron_Icon
            id={nextBtnId}
            className={classNames(styles.slider_arrow, styles.rightArrow)}
          />
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
