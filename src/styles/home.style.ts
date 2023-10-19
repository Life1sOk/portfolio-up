import styled from "styled-components";

export const HomeWrapper = styled.main`
  width: 100vw;
  height: fit-content;

  overflow-x: hidden;
`;

export const HomeContainer = styled.div`
  max-width: 81.25rem;
  min-width: 20rem; /* 320px converted to rem */
  margin: 0 auto;
  padding: 0 6.25rem; /* 100px converted to rem */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1044px) {
    padding: 0 8.125rem; /* 130px converted to rem */
  }

  @media only screen and (max-width: 771px) {
    padding: 0 4.8125rem; /* 77px converted to rem */
  }

  @media only screen and (max-width: 509px) {
    padding: 0 2.8125rem; /* 45px converted to rem */
  }

  @media only screen and (max-width: 409px) {
    padding: 0 1.375rem; /* 22px converted to rem */
  }
`;
