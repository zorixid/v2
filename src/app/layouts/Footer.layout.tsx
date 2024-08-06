import { Icon } from "@iconify/react";
import { dSocials } from "app/config/data/home.data";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pb-4 pt-8 md:pt-12 border-t border-gray-300/20">
      <div className="flex justify-center gap-4">
        {dSocials.map((item) => {
          return (
            <a
              target="_blank"
              href={item.link}
              key={`footer-social-key-${item.name}`}
              className="cursor-pointer group w-fit relative outline-none" rel="noreferrer"
            >
              <div className="border-2  border-gray-300/80 group-hover:scale-y-[0.6] group-hover:border-gold-main group-hover:skew-x-[-30deg] transition-all duration-300 absolute w-full h-full top-2 group-hover:opacity-50 left-0 opacity-0"></div>
              <div className="border-2  border-gray-300/80 group-hover:scale-y-[0.6] group-hover:border-gold-main group-hover:skew-x-[-30deg] transition-all duration-300 absolute w-full h-full top-4 group-hover:opacity-20 left-0 opacity-0"></div>
              <div className="border-2  border-gray-300/80 group-hover:scale-y-[0.6] group-hover:border-gold-main group-hover:skew-x-[-30deg] transition-all duration-300 group-hover:bg-gold-main p-2 ">
                <Icon
                  icon={item.icon}
                  className="w-6 h-6 group-hover:text-black dark:group-hover:text-white"
                />
              </div>
            </a>
          );
        })}
      </div>
      <div className="text-center mt-4">Created with ❤️ by Alexis Tanaka</div>
    </footer>
  );
};

export default Footer;
