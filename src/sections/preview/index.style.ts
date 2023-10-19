import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 39.3125rem; /* 629px converted to rem */
  padding-top: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 41.625rem) {
    /* 666px converted to rem */
    height: 100vh;
    padding-top: 4.09375rem; /* 65.5px converted to rem */
  }

  @media only screen and (max-width: 74.4375rem) {
    /* 1191px converted to rem */
    justify-content: center;
  }
`;

export const Animation = styled.section`
  width: 34%;
  perspective: 43.75rem; /* 700px converted to rem */

  @media only screen and (max-width: 74.4375rem) {
    /* 1191px converted to rem */
    display: none;
  }
`;
