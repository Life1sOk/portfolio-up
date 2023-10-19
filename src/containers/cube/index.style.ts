import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  perspective: 46.875rem; /* 750px converted to rem */
  perspective-origin: 50% 6.25rem; /* 100px converted to rem */
`;

export const Box = styled.div`
  width: 15.625rem; /* 250px converted to rem */
  height: 15.625rem; /* 250px converted to rem */

  position: relative;
  transform-style: preserve-3d;
  animation: spinner 66s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotateY(0);
    }

    100% {
      transform: rotateY(1turn);
    }
  }

  #front {
    transform: translateZ(7.8125rem); /* 125px converted to rem */
    box-shadow: inset 0 1.25rem 6.25rem ${({ theme }) => theme.shadow.cube};
  }

  #back {
    transform: translateZ(-7.8125rem) rotateY(180deg);
    box-shadow: inset 0 0 1.875rem ${({ theme }) => theme.shadow.cube};
  }

  #left {
    right: 7.8125rem; /* 125px converted to rem */
    transform: rotateY(-90deg);
    box-shadow: inset 0 0 2.1875rem ${({ theme }) => theme.shadow.cube};
  }

  #rigth {
    left: 7.8125rem; /* 125px converted to rem */
    transform: rotateY(90deg);
    box-shadow: inset 0 0 2.1875rem ${({ theme }) => theme.shadow.cube};
  }

  #top {
    bottom: 7.8125rem; /* 125px converted to rem */
    transform: rotateX(90deg);
    box-shadow: inset 0 0 2.1875rem ${({ theme }) => theme.shadow.cube};
  }

  #bottom {
    top: 7.8125rem; /* 125px converted to rem */
    transform: rotateX(-90deg);
    box-shadow: inset 0 0 2.1875rem ${({ theme }) => theme.shadow.cube};
    filter: drop-shadow(
      0 0 2.5rem #7e57c2
    ); /* drop-shadow(0px 0px 100px #7e57c2) converted to rem */

    animation: shadow 2s ease-in; /* 2s converted to rem */

    @keyframes shadow {
      0% {
        filter: drop-shadow(
          0 0 0 #7e57c2
        ); /* drop-shadow(0px 0px 0px #7e57c2) converted to rem */
      }

      100% {
        filter: drop-shadow(
          0 0 1.25rem #7e57c2
        ); /* drop-shadow(0px 0px 40px #7e57c2) converted to rem */
      }
    }
  }
`;

export const CardSide = styled.div`
  position: absolute;
  height: 15.625rem; /* 250px converted to rem */
  width: 15.625rem; /* 250px converted to rem */
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.animation.secondary};
  border: 0.0625rem solid white; /* 1px converted to rem */
  font-size: 0.875rem; /* 14px converted to rem */
  box-sizing: border-box;
  transition: all 1s;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => (color ? color : "white")};

  svg {
    width: 60%;
    height: 60%;
  }
`;
