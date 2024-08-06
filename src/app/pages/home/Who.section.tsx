import { Icon } from "@iconify/react";
import { dTerms } from "app/config/data/home.data";
import NumberCounter from "app/components/global/animations/NumberCounter";
import ScrollAnimationElement from "app/components/global/animations/ScrollAnimatedElement";

const Who = () => {
  return (
    <section className="m-section  bg-gray-100/10" id="about">
      <div className="flex lg:max-w-[1200px] mx-auto justify-around gap-8 flex-col lg:flex-row max-w-[560px]">
        <div className="flex-none">
          <div className="m-font-number text-gold-main  md:text-9xl font-bold flex items-center gap-4 justify-center lg:justify-start ml-3 text-6xl">
            <NumberCounter duration={2} end={8} />
            <div className="text-5xl md:text-8xl">+</div>
          </div>
          <div className="text-4xl md:text-6xl ml-0 lg:ml-6 mt-2 md:mt-4 text-center lg:text-left">
            <ScrollAnimationElement
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              duration={0.8}
            >
              Years of
            </ScrollAnimationElement>
          </div>
          <div className="text-4xl md:text-6xl mt-2 md:mt-4 text-center lg:text-left">
            {" "}
            <ScrollAnimationElement
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              duration={0.8}
              delay={0.2}
            >
              Experience
            </ScrollAnimationElement>
          </div>
        </div>
        <div className="lg:max-w-[720px] w-full">
          <ScrollAnimationElement
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(12px)",
            }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            duration={1}
          >
            <h1 className="text-gold-main dark:text-white  mb-8 text-center lg:text-left">
              Blockchain Developer
            </h1>
          </ScrollAnimationElement>
          <ScrollAnimationElement
            initial={{
              opacity: 0,
              transform: "scale(0.8)",
              filter: "blur(12px)",
            }}
            animate={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
            duration={1}
            delay={0.5}
          >
            <div className="text-center lg:text-left">
              Experienced Blockchain Developer with a strong background in
              building web3 applications. Proficient in deploying smart
              contracts on EVM chains, and integrating with web and mobile
              application. Skilled in JS/TS programming, MERN development, and
              staying tech trends with web3 ecosystems. A collaborative team
              player dedicated to delivering innovative and impactful results.
            </div>
          </ScrollAnimationElement>
        </div>
      </div>
      <div className="flex items-center mt-24 flex-col md:flex-row gap-8 justify-around mx-auto max-w-[1200px] flex-wrap ">
        {dTerms.map((term, index) => {
          return (
            <div
              key={`term-card-${term.text}`}
              className="flex flex-col items-start"
            >
              <div className="relative flex items-center gap-4">
                <div className="relative">
                  <Icon
                    icon={term.subicon}
                    className="absolute w-8 h-8 text-yellow-600/80 -top-2 -right-3"
                  />
                  <Icon
                    icon={term.subicon}
                    className="absolute w-8 h-8 text-yellow-600/80 -top-2 -right-3 a-ping-slow"
                  />
                  <Icon icon={term.icon} className="w-12 h-12 text-gold-main" />
                </div>
                <div className="m-font-number text-3xl font-bold w-16">
                  <NumberCounter duration={2} end={term.amount} />
                  {term.unit}
                </div>
              </div>
              <div className="text-gold-dark mt-3">{term.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Who;
