import ScrollAnimationElement from "app/components/global/animations/ScrollAnimatedElement";
import Slider3D from "app/components/local/Slider3D";
import { dTestimonials } from "app/config/data/home.data";

const Testimonial = () => {
  return (
    <section
      className="m-section bg-gray-100 dark:bg-white/5"
      id="testimonials"
    >
      <ScrollAnimationElement
        initial={{ opacity: 0, y: -30, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
        duration={0.3}
      >
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-gold-main text-center  mb-12 lg:mb-16  m-text-overflow ">
            Testimonials
          </h1>
        </div>
        <div>
          <Slider3D data={dTestimonials} />
        </div>
      </ScrollAnimationElement>
    </section>
  );
};

export default Testimonial;
