import AnimatedSlideButton from "app/components/global/buttons/AnimatedSlideButton";
import React from "react";

const Contact = () => {
  return (
    <section className="m-section" id="contact">
      <h1 className="text-center">Contact Me</h1>
      <div className="mx-auto max-w-[800px] mt-16 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input className="m-input" placeholder="Full Name*"></input>
          <input className="m-input" placeholder="Email Address*"></input>
        </div>
        <input className="m-input" placeholder="Subject*"></input>
        <textarea placeholder="Your Message*" className="m-input" rows={4} />
        <a href="mailto:axtanaka@outlook.com" className="mt-4 ml-auto">
          <AnimatedSlideButton
            originClassName="w-fit m-transition-color text-dark-main block bg-gold-main"
            nextClassName="top-0 -left-full group-hover:left-0 w-full h-full duration-100 bg-gray-300 dark:bg-white "
            effectClassName="dark:border-white border-gold-dark"
            onClick={() => {}}
          >
            Send Message
          </AnimatedSlideButton>
        </a>
      </div>
    </section>
  );
};

export default Contact;
