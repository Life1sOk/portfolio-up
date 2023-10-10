import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  perspective: 750px;
  perspective-origin: 50% 100px;
`;

export const Box = styled.div`
  width: 250px;
  height: 250px;

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
    transform: translateZ(125px);
    box-shadow: inset 0 20px 100px ${({ theme }) => theme.shadow.cube};
  }

  #back {
    transform: translateZ(-125px) rotateY(180deg);
    box-shadow: inset 0 0 30px ${({ theme }) => theme.shadow.cube};
  }

  #left {
    right: 125px;
    transform: rotateY(-90deg);
    box-shadow: inset 0 0 35px ${({ theme }) => theme.shadow.cube};
  }

  #rigth {
    left: 125px;
    transform: rotateY(90deg);
    box-shadow: inset 0 0 35px ${({ theme }) => theme.shadow.cube};
  }

  #top {
    bottom: 125px;
    transform: rotateX(90deg);
    box-shadow: inset 0 0 35px ${({ theme }) => theme.shadow.cube};
  }

  #bottom {
    top: 125px;
    transform: rotateX(-90deg);
    box-shadow: inset 0 0 35px ${({ theme }) => theme.shadow.cube};
    filter: drop-shadow(0px 0px 100px #7e57c2);

    animation: shadow 2s ease-in;

    @keyframes shadow {
      0% {
        filter: drop-shadow(0px 0px 0px #7e57c2);
      }

      100% {
        filter: drop-shadow(0px 0px 40px #7e57c2);
      }
    }
  }
`;

export const CardSide = styled.div`
  position: absolute;
  height: 250px;
  width: 250px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.animation.secondary};
  border: 1px solid white;
  font-size: 14px;
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
