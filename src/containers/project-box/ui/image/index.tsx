import Image from "next/image";

import { ImageStyle, ImageWhiteFront } from "./index.style";

interface IComponent {
  screen: any;
  title: string;
  isFront: boolean;
}

const ImageUi = ({ screen, title, isFront = false }: IComponent) => {
  return (
    <ImageStyle>
      <Image src={screen} alt={title} fill />
      {isFront && <ImageWhiteFront />}
    </ImageStyle>
  );
};

export default ImageUi;
