import React from "react";
import "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};
const ImageShine = ({ className = "", children }: Props) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <div
        className="-top-full left-[-20%] absolute w-[200%] h-full -rotate-45 a-bounce"
        style={{
          animationDelay: `${Math.floor(3 + Math.random() * 30)}s`,
        }}
      >
        <div className="bg-white/20 w-full h-[10px]"></div>
        <div className="bg-white/20 w-full h-[30px]  mt-2"></div>
      </div>
    </div>
  );
};

export default ImageShine;
