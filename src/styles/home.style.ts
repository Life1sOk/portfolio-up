import styled from "styled-components";

export const HomeWrapper = styled.main`
  width: 100%;
  height: 100%;

  overflow-x: hidden;
`;

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1299.98px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 100px;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 771px) {
    padding: 0 77px;
  }

  @media only screen and (max-width: 509px) {
    padding: 0 45px;
  }

  @media only screen and (max-width: 409px) {
    padding: 0 22px;
  }
`;
