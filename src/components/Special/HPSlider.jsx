import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import B0 from "../../assets/banners/0.png";
import B1 from "../../assets/banners/1.png";
import B2 from "../../assets/banners/2.png";

const HPSlider = () => {
  return (
    <Swiper
      className="select-none"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img src={B0} className="h-80" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={B1} className="h-80" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={B2} className="h-80" />
      </SwiperSlide>
    </Swiper>
  );
};
export default HPSlider;
