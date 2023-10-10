import styled from "styled-components";

export const ToolsStyle = styled.ul<{ size?: string }>`
  width: 100%;
  position: relative;
  z-index: 3;

  overflow-x: scroll;

  font-size: ${({ size }) => (size === "small" ? "12px" : "13px")};
  font-weight: 500;
  color: ${({ theme }) => theme.title.main};
  padding: 7px 7px 7px 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 848px) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 410px) {
    font-size: 12px;
  }

  /* width */
  ::-webkit-scrollbar {
    height: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 10px;
  }
`;

export const OneTool = styled.li`
  /* white-space: nowrap; */
`;
