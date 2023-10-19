import styled from "styled-components";

import type { IFigure } from "../../types";

export const FigurContainer = styled.div<IFigure>`
  width: ${({ width }) => (width ? width : "60%")};
  height: ${({ height }) => (height ? height : "20%")};
  background-color: rgba(245, 254, 253, 1);
  border-radius: ${({ radius }) => (radius ? radius : ".44rem")};
  animation-name: ${({ type }) =>
    type === "line" ? "line" : type === "box" ? "box" : "none"};
  animation-duration: 2.5s;

  @keyframes line {
    from {
      width: 0;
    }
    to {
      ${({ width }) => (width ? width : "60%")}
    }
  }

  @keyframes box {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
