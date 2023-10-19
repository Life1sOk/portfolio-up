import styled from "styled-components";

export const CopyrightContainer = styled.div`
  width: fit-content;
  font-size: 0.5625rem; /* 9px converted to rem */
  padding: 0.3125rem; /* 5px converted to rem */
  color: ${({ theme }) => theme.color.secondary};

  display: flex;
  gap: 0.3125rem; /* 5px converted to rem */
  justify-content: center;
  align-items: center;
`;
