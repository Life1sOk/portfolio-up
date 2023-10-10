import React from "react";

import { Left, Right } from "./index.style";
import { SlideContainerLayout, MainRawLayout, TitleLayout } from "../../layouts";

import Figur from "../figur";

import { left, right } from "./consts";

const BlogSlide = () => {
  return (
    <SlideContainerLayout>
      <TitleLayout>Blog</TitleLayout>
      <MainRawLayout>
        <Left>
          {left.map((box, index) => (
            <Figur key={index} datas={box} />
          ))}
        </Left>
        <Right>
          {right.map((box, index) => (
            <Figur key={index} datas={box} />
          ))}
        </Right>
      </MainRawLayout>
    </SlideContainerLayout>
  );
};

export default BlogSlide;
