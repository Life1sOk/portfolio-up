import styled from "styled-components";

export const ProjectBoxStyle = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;
  margin-bottom: 5.625rem; /* 90px converted to rem */

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.1875rem; /* 35px converted to rem */

  border-radius: 0.3125rem; /* 5px converted to rem */
  box-shadow: ${({ theme }) => theme.shadow.projects};

  @media only screen and (max-width: 1044px) {
    flex-direction: column;
    gap: 1.25rem; /* 20px converted to rem */
  }

  @media only screen and (max-width: 848px) {
    margin-bottom: 4.125rem; /* 66px converted to rem */
  }
`;
