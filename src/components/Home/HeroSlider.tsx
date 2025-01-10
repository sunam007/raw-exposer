// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import c1 from "../../assets/images/hero/c1.jpg";
import c2 from "../../assets/images/hero/c2.jpg";
import c3 from "../../assets/images/hero/c3.jpg";
import c4 from "../../assets/images/hero/c4.jpg";

const HeroSlider = () => {
  return (
    <header>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[EffectFade, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={c1} className="d-block w-100" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c2} className="d-block w-100" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c3} className="d-block w-100" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c4} className="d-block w-100" alt="..." />
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
};

export default HeroSlider;
