import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
type Props = {
  end: number;
  duration: number;
  triggerOnce?: boolean;
  decimals?: number;
  separator?: string;
};
const NumberCounter = ({
  end,
  duration,
  triggerOnce = true,
  decimals = 0,
  separator = ",",
}: Props) => {
  const [refView, isView] = useInView({
    triggerOnce: triggerOnce,
  });
  return (
    <div className="inline" ref={refView}>
      {isView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          separator={separator}
          decimals={decimals}
        />
      ) : (
        0
      )}
    </div>
  );
};

export default NumberCounter;
