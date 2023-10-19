import styled from "styled-components";

export const AboutMeStyle = styled.div`
  width: 100%;
  font-size: var(--font-basic);
  line-height: 1.6;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  & p {
    text-align: left;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 32.5625rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;
