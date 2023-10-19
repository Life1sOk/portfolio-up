import styled from "styled-components";

export const MainWrapper = styled.section`
  width: 100%;
  padding: 135px 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 1044px) {
    padding: 85px 0;
  }
`;

export const MainSkills = styled.div`
  width: 100%;
  max-width: 21.875rem; /* 350px converted to rem */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1044px) {
    width: 100%;
    max-width: 25rem; /* 400px converted to rem */
  }
`;

export const BoxWrapper = styled.div`
  width: 21.875rem; /* 350px converted to rem */
  margin-top: 4.375rem; /* 70px converted to rem */

  @media only screen and (max-width: 1044px) {
    display: none;
  }
`;
