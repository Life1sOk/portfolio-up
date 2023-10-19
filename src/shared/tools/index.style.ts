import styled from "styled-components";

export const ToolsStyle = styled.ul`
  position: relative;
  z-index: 3;

  width: 100%;
  height: fit-content;

  font-size: var(--font-small);
  font-weight: 500;
  color: ${({ theme }) => theme.title.main};
  padding: 0.3125rem 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;

  @media only screen and (max-width: 848px) {
    justify-content: flex-start;
  }
`;
