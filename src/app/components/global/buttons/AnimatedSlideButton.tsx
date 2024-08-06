import React from "react";

type Props = {
  children: React.ReactNode;
  originClassName: string;
  nextClassName: string;
  effectClassName: string;
  onClick: () => void;
};

const AnimatedSlideButton = ({
  children,
  originClassName,
  nextClassName,
  effectClassName,
  onClick,
}: Props) => {
  return (
    <button
      className={`relative group outline-none  ${originClassName}`}
      onClick={onClick}
    >
      <div
        className={`absolute w-4/5 h-4/5 -top-1 -left-1 border-t border-l ${effectClassName}`}
      ></div>
      <div
        className={`absolute w-4/5 h-4/5 -bottom-1 -right-1 border-b border-r ${effectClassName}`}
      ></div>
      <div className="overflow-hidden w-full h-full relative px-4 py-2 ">
        <span className={`absolute ${nextClassName}`}></span>
        <span className="relative z-10">{children}</span>
      </div>
    </button>
  );
};

export default AnimatedSlideButton;
