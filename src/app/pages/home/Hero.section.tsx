import ScrollAnimationElement from "app/components/global/animations/ScrollAnimatedElement";
import AnimatedSlideButton from "app/components/global/buttons/AnimatedSlideButton";

const Hero = () => {
  return (
    <section
      className="flex lg:flex-row flex-col items-stretch min-h-[100vh] justify-center"
      id="hero"
    >
      <div className="w-full lg:w-1/2 overflow-hidden h-[100vh] relative hidden lg:block">
        <img
          src="/assets/images/head-dark.png"
          className="object-cover w-full h-full bg-dark-light hidden dark:block"
          alt="HD"
        />
        <img
          src="/assets/images/head-light.png"
          className="object-cover w-full h-full bg-dark-light dark:hidden"
          alt="HD"
        />
      </div>
      <div className="w-full lg:w-1/2 py-16 lg:py-20 flex flex-col justify-center px-4 lg:px-[5%]">
        <ScrollAnimationElement
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          duration={0.8}
        >
          <img
            src="/assets/at-large.png"
            className="max-w-[200px] lg:max-w-none w-full lg:w-[30%] mx-auto"
            alt="A.T"
          />
        </ScrollAnimationElement>
        <div className=" m-font-open font-bold text-4xl lg:text-[4vw] leading-tight mt-6 ">
          <ScrollAnimationElement
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            duration={1.5}
            delay={0.4}
          >
            <div className="text-center lg:text-left text-dark-lihgt dark:text-white m-transition-color ">
              HI, I AM
            </div>
          </ScrollAnimationElement>
          <ScrollAnimationElement
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            duration={1.5}
            delay={0.6}
          >
            <div className="text-gold-main text-center">Alexis Tanaka</div>
          </ScrollAnimationElement>
        </div>
        <ScrollAnimationElement
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          duration={0.8}
          delay={1}
        >
          <div className="flex items-center flex-wrap mt-12 gap-8 justify-center">
            <a href="/#contact">
              <AnimatedSlideButton
                originClassName="w-fit m-transition-color text-dark-main  block  bg-gray-300 dark:bg-white"
                nextClassName="top-0 -left-full group-hover:left-0 w-full h-full duration-100 bg-gold-main "
                effectClassName="dark:border-white border-gold-dark"
                onClick={() => {}}
              >
                Contact Me
              </AnimatedSlideButton>
            </a>
            <a href="/resume.pdf" target="_blank">
              <AnimatedSlideButton
                originClassName="w-fit m-transition-color text-dark-main  block   bg-gold-main"
                nextClassName="top-0 -left-full group-hover:left-0 w-full h-full duration-100 bg-gray-300 dark:bg-white "
                effectClassName="dark:border-white border-gold-dark"
                onClick={() => {}}
              >
                Download CV
              </AnimatedSlideButton>
            </a>
          </div>
        </ScrollAnimationElement>
      </div>
    </section>
  );
};

export default Hero;
