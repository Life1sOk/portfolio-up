import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  padding: 135px 0;

  display: flex;
  flex-direction: column;
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
  margin: 22px 0 33px 0;
  font-size: 20px;
  color: ${({ theme }) => theme.color.secondary};
`;

export const SmallStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(277px, 1fr));
  justify-items: center;
  gap: 18px;
`;
