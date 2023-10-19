import styled from "styled-components";

export const ImageStyle = styled.div`
  position: relative;
  width: 33.875rem; /* 542px converted to rem */
  aspect-ratio: 1.76/1;

  display: flex;
  align-items: center;
  flex-shrink: 0;

  & img {
    border-radius: 0.3125rem; /* 5px converted to rem */
  }

  @media only screen and (max-width: 1088px) {
    width: 32.8125rem; /* 525px converted to rem */
  }

  @media only screen and (max-width: 1044px) {
    width: 100%;
  }
`;

export const ImageWhiteFront = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  border-radius: 0.3125rem; /* 5px converted to rem */

  background-color: ${({ theme }) => theme.shadow.front};
`;
