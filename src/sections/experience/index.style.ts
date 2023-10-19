import styled from "styled-components";

export const ExperienceStyle = styled.section`
  width: 100%;
  padding: 5.3125rem 0; /* 85px converted to rem */

  display: flex;
  flex-direction: column;
`;

export const FlagsWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(17.0625rem, 1fr)
  ); /* 273px converted to rem */
  justify-items: center;
  grid-column-gap: 1.75rem; /* 28px converted to rem */
  grid-row-gap: 3.4375rem; /* 55px converted to rem */
`;
