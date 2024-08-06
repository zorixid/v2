import { Pagination, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css";
import { dCerts } from "app/config/data/home.data";
import { Icon } from "@iconify/react";

const Certification = () => {
  return (
    <section className="m-section overflow-hidden" id="certification">
      <h1 className="text-center text-main-400 mb-16">Certifications</h1>
      <Swiper
        effect="cards"
        loop
        grabCursor
        data-aos="fade-left"
        spaceBetween={20}
        modules={[EffectCards]}
        className="w-full max-w-[720px] !p-4 overflow-visible"
      >
        {dCerts.map((item, i) => {
          return (
            <div key={"review" + i}>
              <SwiperSlide className="bg-white dark:bg-dark-light border-gold-main/10 border shadow-md p-4">
                <img src={item.image} alt="" className="w-full" />
                <div className="mt-4 text-center flex items-center gap-4 justify-center">
                  <div>
                    {item.title} ({item.from}){" "}
                  </div>
                  <a href={item.link} target="_blank">
                    <Icon
                      icon={"tdesign:link"}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </a>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certification;
