import { Icon } from "@iconify/react";
import ScrollAnimationElement from "app/components/global/animations/ScrollAnimatedElement";
import { dServices } from "app/config/data/home.data";

const Service = () => {
  return (
    <section className="m-section bg-gray-100 dark:bg-dark-light" id="services">
      {/* Service */}
      <h1 className="text-gold-main text-center  mb-12 lg:mb-16 flex items-center justify-center">
        {"What I can do".split("").map((i, index) => {
          return (
            <ScrollAnimationElement
              key={`title-service-${index}`}
              initial={{ opacity: 0, y: -30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              duration={0.3}
              delay={0.5 + 0.1 * index}
            >
              <div className=" min-w-[20px]">{i}</div>
            </ScrollAnimationElement>
          );
        })}
      </h1>
      <div className="flex  flex-wrap first-letter justify-center gap-4 max-w-[1500px] mx-auto mt-12">
        {dServices.map((item, index) => {
          return (
            <ScrollAnimationElement
              key={`service-card-${item.title}`}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              duration={0.8}
              delay={index * 0.2}
            >
              <div className="border border-gold-main/70 p-3 w-full max-w-[300px] cursor-pointer group relative overflow-hidden">
                <div className="absolute w-0 h-full top-0 left-[50%] group-hover:left-0 group-hover:w-full bg-white dark:bg-dark-main transition-all duration-300"></div>
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={`/assets/images/service-${item.image}.png`}
                    alt={item.title}
                    className="w-full group-hover:scale-125 transition-all duration-500 sepia group-hover:sepia-0"
                  />
                </div>
                <div className="relative z-10 bg-white dark:bg-dark-main w-fit mx-auto -mt-8  text-gold-main rounded-full p-3 border border-gold-main">
                  <Icon icon={item.icon} className="w-8 h-8" />
                </div>
                <div className="relative text-gold-main text-center mt-2 text-xl font-bold mb-4">
                  {item.title}
                </div>
              </div>
            </ScrollAnimationElement>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
