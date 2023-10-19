import styled from "styled-components";

export const ContactStyle = styled.section`
  position: relative;

  width: 100%;
  height: 629px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 666px) {
    height: 100vh;
  }
`;

export const Info = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
