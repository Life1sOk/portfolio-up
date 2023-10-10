import React from "react";

import {
  Top,
  Middle,
  BoxContainer,
  BoxContainerBot,
  BoxWrapper,
  Aside,
} from "./index.style";
import { SlideContainerLayout, MainColumnLayout, TitleLayout } from "../../layouts";

import Figur from "../figur";

import { top, box } from "./consts";

const times = [1, 2, 3, 4, 5, 6];

const ECommerce = () => {
  return (
    <SlideContainerLayout duration="1s">
      <TitleLayout>eCommerce</TitleLayout>
      <MainColumnLayout>
        <Top>
          {top.map((line, index) => (
            <Figur key={index} datas={line} />
          ))}
        </Top>
        <Middle>
          <Aside>
            {box.map((box, index) => (
              <Figur key={index} datas={box} />
            ))}
          </Aside>
          <BoxWrapper>
            {times.map((num) => (
              <BoxContainer key={num}>
                <Figur
                  datas={{
                    type: "line",
                    width: "100%",
                    height: "80%",
                    color: "lightblue",
                  }}
                />
                <BoxContainerBot>
                  <Figur
                    datas={{
                      type: "line",
                      width: "100%",
                      height: "100%",
                      color: "lightblue",
                    }}
                  />
                  <Figur
                    datas={{
                      type: "line",
                      width: "100%",
                      height: "100%",
                      color: "lightblue",
                    }}
                  />
                </BoxContainerBot>
              </BoxContainer>
            ))}
          </BoxWrapper>
        </Middle>
      </MainColumnLayout>
    </SlideContainerLayout>
  );
};

export default ECommerce;
