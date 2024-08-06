import { Icon } from "@iconify/react";
import { useRef, useState, useEffect } from "react";
import { StackedCarousel } from "react-stacked-center-carousel";
type Props = {
  data: any;
};
const Slider3D = ({ data }: Props) => {
  const [centerSlideDataIndex, setCenterSlideDataIndex] = useState(0);
  const [widthParent, setWidthParent] = useState(0);
  const onCenterSlideDataIndexChange = (newIndex: number) => {
    setCenterSlideDataIndex(newIndex);
  };
  const refParent = useRef<any>(null);
  useEffect(() => {
    setWidthParent(refParent.current.offsetWidth);
    return () => {};
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidthParent(refParent.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [refParent]);

  return (
    <div className="w-full" ref={refParent}>
      <StackedCarousel
        slideComponent={Card}
        slideWidth={widthParent > 600 ? 540 : widthParent - 10}
        carouselWidth={widthParent}
        data={data}
        currentVisibleSlide={widthParent > 600 ? 3 : 1}
        maxVisibleSlide={5}
        useGrabCursor
        onActiveSlideChange={onCenterSlideDataIndexChange}
      />

      <Pagination centerSlideDataIndex={centerSlideDataIndex} data={data} />
    </div>
  );
};
function Pagination(props: any) {
  return (
    <div className="mt-5 flex justify-center gap-3 lg:mt-8">
      {props.data.map((_: any, index: number) => {
        const isCenterSlide = props.centerSlideDataIndex === index;
        return (
          <div
            key={"pageCar" + index}
            className={` h-2.5 w-2.5 rounded-full ${
              isCenterSlide ? "bg-gold-main " : "bg-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
}

export const Card = (props: any) => {
  const data = props.data;
  const dataIndex = props.dataIndex;
  const item = data[dataIndex];
  return (
    <div className={`w-full  select-none mx-auto`}>
      <div
        className="relative flex w-full flex-col bg-white dark:bg-dark-dark p-10 border-gray-400/20 border"
        draggable={false}
      >
        <div
          className="absolute w-full h-full top-0 left-0 border border-gold-main"
          style={{
            clipPath:
              "polygon(15% 0, 0 15%, 0 85%, 15% 100%, 85% 100%, 100% 85%, 100% 15%, 85% 0, 100% 0, 100% 100%, 15% 100%, 0 100%, 0 0)",
          }}
        ></div>
        <div className="absolute right-0 top-0">
          <Icon
            icon={"bi:quote"}
            className="w-[100px] h-[100px] text-gold-main/20 aspect-square"
          />
        </div>
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            className="w-16 h-16 border-2 border-gold-main dark:bg-dark-light bg-gray-100 rounded-full"
            alt=""
          />
          <div>
            <div className="font-bold text-lg text-gold-main">{item.name}</div>
            <div className="text-gold-black">{item.position}</div>
          </div>
        </div>
        <div className="text-justify mt-6">{item.text}</div>
      </div>
    </div>
  );
};
export default Slider3D;
