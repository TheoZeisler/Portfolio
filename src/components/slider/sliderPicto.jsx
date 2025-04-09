import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import { Cards, icons } from "../card/cards";
export function SliderPicto() {
  return (
    <div className="bg-bgCustom pb-5 pt-5">
      <Swiper
        slidesPerView={3.9}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 5.9,
          },
          1024: {
            slidesPerView: 6.9,
          },
          1280: {
            slidesPerView: 7.9,
          },
        }}
        className="w-full"
      >
        {icons.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Cards icon={item.icon}></Cards>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
