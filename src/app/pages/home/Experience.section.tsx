import { dExperience } from "app/config/data/home.data";
import React from "react";

const Experience = () => {
  return (
    <section
      className="m-section bg-gray-100 dark:bg-dark-light"
      id="experience"
    >
      <h1 className="text-center">Work Experience</h1>
      <div className="container mx-auto my-5 flex flex-col items-center p-5 md:flex-col max-w-[1200px]">
        {dExperience.map((item, i) => {
          return (
            <div className="relative h-full w-full">
              <div className="invisible absolute flex h-full w-[200px] flex-col items-center md:visible">
                <div className=" h-full w-0.5 bg-gold-main"></div>
                <div className="my-5 h-6 w-6 flex-none rounded-full bg-gold-main shadow-[0_0_60px_15px_#ffc80043]"></div>
                <div className=" h-full w-0.5 bg-gold-main"></div>
              </div>
              <div className="mb-5 rounded-md bg-gold-main/10 p-5 md:my-3 md:mb-0 md:ml-[200px] md:flex md:flex-row-reverse md:items-start lg:px-10">
                <div className="w-full">
                  <div className="mt-4 flex items-center">
                    <div className="border-2 w-16 h-16 flex justify-center items-center rounded-full border-gold-main">
                      <img
                        src={item.logo}
                        alt={"logo"}
                        className="h-[40px]"
                      ></img>
                    </div>
                    <div className="w-20 border-b border-b-2 border-gold-main"></div>
                    <a href={item.link} className="ml-2 text-2xl font-bold text-gold-main">
                      {item.company}
                    </a>
                  </div>
                  <div className="mt-3 text-left text-base text-red-500 md:text-lg uppercase">
                    {item.position}
                  </div>
                  <div className=" text-left text-gray-600 dark:text-white md:text-base">
                    {item.duration}
                  </div>
                  <div className="py-4 text-left text-gold-main dark:text-primary-400 md:text-base">
                    {item.descriptions.map((description, id) => {
                      return <div key={"des" + id}>- {description}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
