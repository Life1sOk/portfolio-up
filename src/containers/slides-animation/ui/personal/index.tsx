import React from "react";

import { Top, Bottom } from "./index.style";
import { SlideContainerLayout, MainColumnLayout, TitleLayout } from "../../layouts";

import Figur from "../figur";

import { top, bottom } from "./consts";

const PersonalSlide = () => {
  return (
    <SlideContainerLayout $duration="1.5s">
      <TitleLayout>Personal</TitleLayout>
      <MainColumnLayout>
        <Top>
          {top.map((box, index) => (
            <Figur key={index} datas={box} />
          ))}
        </Top>
        <Bottom>
          {bottom.map((line, index) => (
            <Figur key={index} datas={line} />
          ))}
        </Bottom>
      </MainColumnLayout>
    </SlideContainerLayout>
  );
};

export default PersonalSlide;
