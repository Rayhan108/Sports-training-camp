

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { Autoplay, EffectFade } from 'swiper/modules';
// import { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css/bundle";
import SingleHeroSlider from "./SingleHeroSlider";
import mainSlider from "../Utilities/mainSlider";

const HeroSlider = () => {
  return (
    <div className="main-slider">
        
      <Swiper
        slidesPerView={1}
        loop
        
        effect="fade"
        autoplay
        modules={[ EffectFade, Autoplay]}
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleHeroSlider slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;