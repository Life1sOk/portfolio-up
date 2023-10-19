import styled from "styled-components";

export const FlagStyle = styled.div`
  width: 17.0625rem; /* 273px converted to rem */

  padding: 1.3125rem; /* 21px converted to rem */
  box-shadow: ${({ theme }) => theme.shadow.exp};
  border-radius: 0.3125rem; /* 5px converted to rem */
  border: 0.0625rem solid ${({ theme }) => theme.background.secondary}; /* 1px converted to rem */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 1.25rem; /* 20px converted to rem */
`;
