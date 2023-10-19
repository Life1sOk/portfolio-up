import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  padding: 135px 0;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1044px) {
    padding: 85px 0;
  }
`;

export const ProjectsStyle = styled.div`
  margin-bottom: 55px;
`;

export const SmallWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const TitleSmall = styled.h2`
  margin: 1.375rem 0 2.0625rem 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.color.secondary};
`;

export const SmallStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17.31rem, 1fr));
  justify-items: center;
  gap: 1.125rem;
`;
