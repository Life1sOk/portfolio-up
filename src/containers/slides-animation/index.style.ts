import styled from "styled-components";

export const SlidesContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;

  transform: rotate3d(0.1, -0.666, 0, 15deg) rotate(1deg);
  transform-style: preserve-3d;
`;

export const SlidesWrapper = styled.div`
  width: 100%;
  z-index: 11;

  display: flex;
  justify-content: center;
  gap: 1.25rem;

  animation-name: animationWindow;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  @keyframes animationWindow {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.01);
    }
  }
`;

export const BackCheck = styled.div`
  position: absolute;
  top: -20%;
  left: -25%;

  width: 140%;
  height: 140%;
  z-index: 10;

  transform: rotate(45deg);
`;
