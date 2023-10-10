import styled from "styled-components";

export const AsideModalStyle = styled.div<{ $status: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 27;

  width: 100vw;
  height: 100vh;

  transform: ${({ $status }) => (!$status ? "translateX(100%)" : "translateX(0)")};
  transition: all 0.4s ease-in-out;

  @media only screen and (min-width: 474px) {
    width: min(75vw, 400px);
  }
`;

export const BlackBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 101;

  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.4;
  z-index: 26;
`;
