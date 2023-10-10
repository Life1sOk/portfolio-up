import Image from "next/image";

import { FlagStyle, FlagTitle, ImageWrapper } from "./index.style";

interface IComponent {
  company: string;
  color?: string;
  src?: string;
}

const Flag = ({ company, color, src }: IComponent) => {
  return (
    <FlagStyle color={color}>
      <ImageWrapper>
        <Image alt="flag" src={src ? src : "/icons/study.gif"} width={100} height={100} />
      </ImageWrapper>
      <FlagTitle>{company}</FlagTitle>
    </FlagStyle>
  );
};

export default Flag;
