import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function SwipperProduct({ productData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeImageId, setActiveImageId] = useState(productData.thumbImages[0].id); // Set default active image to the first one

  return (
    <div className='sneak-card'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={productData.thumbImages.length > 0}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=""
      >
        {productData.thumbImages.map((image) => (
          <SwiperSlide key={image.id} className="mt-2 d-flex gap-1 justify-content-between">
            <img className="product-img shadow" src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={productData.thumbImages.length > 1}
        spaceBetween={10}
        slidesPerView={productData.thumbImages.length >= 4 ? 4 : productData.thumbImages.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {productData.thumbImages.map((image) => (
          <SwiperSlide key={image.id} onClick={() => setActiveImageId(image.id)} className={`${image.id === activeImageId ? 'active-img' : ''} thumb-img mt-2 d-flex gap-1 justify-content-between`}>
            <img className="thumbnail-img" src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
