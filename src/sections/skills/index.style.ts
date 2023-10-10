import styled from "styled-components";

export const MainWrapper = styled.section`
  width: 100%;
  padding: 135px 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MainSkills = styled.div`
  width: 100%;
  max-width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1044px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const BoxWrapper = styled.div`
  width: 350px;
  margin-top: 70px;

  @media only screen and (max-width: 1044px) {
    display: none;
  }
`;
