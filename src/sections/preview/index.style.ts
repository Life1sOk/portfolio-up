import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 565px;

  padding-top: 65.5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1280px) {
    justify-content: center;
  }
`;

export const Animation = styled.section`
  width: 34%;
  perspective: 700px;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;
