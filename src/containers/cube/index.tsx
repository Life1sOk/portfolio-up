import React from "react";

import { bigBox } from "./consts";

import { BoxWrapper, Box, CardSide, IconWrap } from "./index.style";

const CubeBox = () => {
  return (
    <BoxWrapper>
      <Box>
        {bigBox.map((side) => (
          <CardSide id={side.side} key={side.id}>
            <IconWrap color={side.color}>{side.icon}</IconWrap>
          </CardSide>
        ))}
      </Box>
    </BoxWrapper>
  );
};

export default CubeBox;
