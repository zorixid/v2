import { Icon } from "@iconify/react";
import React, { useState } from "react";

export interface IAccordion {
  title: string;
  content: string;
}
type Props = {
  items: IAccordion[];
  titleClass?: string;
  iconClass?: string;
  contentClass?: string;
  containerClass?: string;
};
const Accordion = ({
  items,
  titleClass = " bg-gray-300/30 p-2",
  iconClass = "w-6 h-6",
  containerClass = "mb-2",
  contentClass = "",
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={containerClass}>
          <div
            className={`flex justify-between items-center cursor-pointer ${titleClass}`}
            onClick={() => onItemClick(index)}
          >
            <div>{item.title}</div>
            <div
              className={`transform ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              } transition-transform duration-500 ease-in-out`}
            >
              <Icon icon={"icon-park-outline:down"} className={iconClass} />
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out  ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            } ${contentClass}`}
          >
            <div className="p-6">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
