import styled from "styled-components";

export const ImageStyle = styled.div`
  position: relative;
  width: 542px;
  aspect-ratio: 1.76/ 1;

  display: flex;
  align-items: center;
  flex-shrink: 0;

  & img {
    border-radius: 5px;
  }

  @media only screen and (max-width: 1088px) {
    width: 525px;
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
  border-radius: 5px;

  background-color: ${({ theme }) => theme.shadow.front};
`;
