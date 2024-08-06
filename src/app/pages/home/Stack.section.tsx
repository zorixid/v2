import { useState } from "react";
import { Icon } from "@iconify/react";
import { dTechs } from "app/config/data/home.data";
import Select from "app/components/global/select/Select";
import ScrollAnimationElement from "app/components/global/animations/ScrollAnimatedElement";

const Stack = () => {
  const [tabId, setTabId] = useState(0);
  return (
    <section
      id="skills"
      className="m-section bg-[#dfdfdf9f] dark:bg-[#000c] bg-blend-overlay bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(/assets/images/pattern.jpg)" }}
    >
      <h1 className="text-gold-main text-center  mb-12 lg:mb-16 flex items-center justify-center">
        <ScrollAnimationElement
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          duration={0.8}
        >
          Skills and Expertise
        </ScrollAnimationElement>
      </h1>

      <ScrollAnimationElement
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
        duration={0.5}
        delay={0.8}
      >
        <div className=" w-full max-w-[640px] lg:max-w-[1200px] mx-auto mt-12 lg:mt-24">
          <div className="items-center justify-center  border-b border-gray-400/30 hidden lg:flex gap-2">
            {dTechs.map((item, id) => {
              return (
                <div
                  key={`home-tech-tab-${id}`}
                  onClick={() => {
                    setTabId(id);
                  }}
                  className={`cursor-pointer p-3 border-b-2 m-transition-color flex flex-col items-center  ${
                    tabId === id
                      ? "border-gold-main text-gold-main"
                      : " border-transparent hover:border-gray-400/50"
                  }`}
                >
                  <Icon icon={item.icon} className="w-6 h-6 lg:w-8 lg:h-8" />
                  <div className="hidden lg:block ">{item.category}</div>
                </div>
              );
            })}
          </div>
          <div className="lg:hidden">
            <Select
              data={dTechs.map((item, id) => {
                return {
                  key: item.category,
                  text: item.category,
                  id,
                  icon: item.icon,
                };
              })}
              init={{
                id: tabId,
                key: dTechs[tabId].category,
                text: dTechs[tabId].category,
                icon: dTechs[tabId].icon,
              }}
              isIcon={true}
              mainClass="border border-gold-dark p-2 px-4 cursor-pointer"
              padClass="absolute top-full left-0 w-full max-h-[200px] overflow-auto shadow-lg bg-gray-200/90 dark:bg-dark-light/90 backdrop-blur-md z-10 border border-gray-400/10"
              listClass="p-2 px-4 cursor-pointer"
              onChange={(selected) => {
                setTabId(selected.id);
              }}
            />
          </div>
          <div className="relative mx-auto w-full max-w-[900px] mt-4">
            {dTechs.map((item, id) => {
              return (
                <div
                  key={`home-tech-tab-content-${id}`}
                  className={`p-2 ${
                    tabId === id
                      ? "flex items-center justify-center flex-wrap gap-4 a-fade-in"
                      : " hidden"
                  }`}
                >
                  {item.contents.map((logo) => {
                    return (
                      <div
                        key={`home-tech-tab-${id}-${logo.title}`}
                        className="w-32 h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center border border-gold-main dark:border-gold-black gap-2 lg:gap-4 bg-gold-main/10 flex-none"
                      >
                        <Icon
                          icon={logo.icon}
                          className="w-12 h-12 lg:w-16 lg:h-16 relative"
                        />
                        <div className="text-center text-sm text-gold-dark">
                          {logo.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollAnimationElement>
    </section>
  );
};

export default Stack;
