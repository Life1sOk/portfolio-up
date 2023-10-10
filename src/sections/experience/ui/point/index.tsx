import { FlagStyle } from "./index.style";

import Flag from "../flag";
import Cloud from "../cloud";

interface IComponent {
  company: string;
  position: string;
  color?: string;
  src?: string;
  start: string;
  end: string;
}

const Point = ({ data }: { data: IComponent }) => {
  const { company, position, start, end, color, src } = data;

  return (
    <FlagStyle>
      <Flag company={company} color={color} src={src} />
      <Cloud position={position} start={start} end={end} />
    </FlagStyle>
  );
};

export default Point;
