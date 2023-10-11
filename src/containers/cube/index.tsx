import React, { useId } from "react";

import { bigBox } from "./consts";

import { BoxWrapper, Box, CardSide, IconWrap } from "./index.style";

const CubeBox = () => {
  const uniqueId = useId();

  return (
    <BoxWrapper>
      <Box>
        {bigBox.map((side) => (
          <CardSide id={side.side} key={uniqueId + side.id}>
            <IconWrap color={side.color}>{side.icon}</IconWrap>
          </CardSide>
        ))}
      </Box>
    </BoxWrapper>
  );
};

export default CubeBox;
