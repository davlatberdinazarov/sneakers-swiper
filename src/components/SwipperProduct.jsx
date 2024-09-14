import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { productImage } from '../../public';

export default function SwipperProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeImageId, setActiveImageId] = useState(1);

  return (
    <div className='sneak-card'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={productImage.length > 0}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=""
      >
        {productImage.map((image) => (
          <SwiperSlide key={image.id} className="mt-2 d-flex gap-1 justify-content-between">
            <img className="product-img shadow" src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={productImage.length > 1}
        spaceBetween={10}
        slidesPerView={productImage.length >= 4 ? 4 : productImage.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {productImage.map((image) => (
          <SwiperSlide key={image.id} onClick={() => setActiveImageId(image.id)} className={`${ image.id == activeImageId ? 'active-img': ''} thumb-img mt-2 d-flex gap-1 justify-content-between`}>
            <img className="thumbnail-img" src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
