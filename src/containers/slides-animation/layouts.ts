import styled from "styled-components";

export const SlideContainerLayout = styled.div<{ duration?: string }>`
  width: 50%;
  aspect-ratio: 1/1;
  padding: 0 3px 3px 3px;
  background-color: ${({ theme }) => theme.animation.background};
  border-radius: 5px;
  flex-shrink: 0;
  transition: all 1s;

  box-shadow: 21px 34px 26px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 21px 34px 26px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 21px 34px 26px -6px rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  animation-name: slide;
  animation-duration: ${({ duration }) => (duration ? duration : "2s")};

  @keyframes slide {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const TitleLayout = styled.span`
  color: white;
  font-size: 12px;
  font-weight: 600;

  margin: 10px;
`;

export const MainColumnLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 25, 47, 0.5);
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainRawLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 25, 47, 0.5);
  padding: 8px;

  display: flex;
  justify-content: space-between;
`;
