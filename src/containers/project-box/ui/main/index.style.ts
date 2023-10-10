import styled from "styled-components";

export const ProjectBoxStyle = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;
  margin-bottom: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;

  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.projects};

  @media only screen and (max-width: 1044px) {
    flex-direction: column;
    gap: 10px;
  }

  @media only screen and (max-width: 848px) {
    margin-bottom: 66px;
  }
`;
