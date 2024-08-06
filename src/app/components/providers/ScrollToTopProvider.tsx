import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ScrollToTopProvider = ({ children }: Props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      setShowButton(scrollPosition > viewportHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`fixed bottom-4 right-4 p-2 bg-gray-300 dark:bg-neutral-800 rounded-full shadow-md cursor-pointer z-40 transition-all duration-300 ${
          showButton
            ? "opacity-100 scale-1 pointer-events-auto"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <Icon icon={"grommet-icons:link-up"} className="w-4 h-4" />
      </div>
      {children}
    </>
  );
};

export default ScrollToTopProvider;
