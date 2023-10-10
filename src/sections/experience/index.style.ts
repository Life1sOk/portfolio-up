import styled from "styled-components";

export const ExperienceStyle = styled.section`
  width: 100%;
  padding: 135px 0;

  display: flex;
  flex-direction: column;
`;

export const FlagsWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(273px, 1fr));
  justify-items: center;
  grid-column-gap: 28px;
  grid-row-gap: 55px;
`;
