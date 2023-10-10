import styled from "styled-components";

export const FlagStyle = styled.div`
  width: 273px;

  padding: 21px;
  box-shadow: ${({ theme }) => theme.shadow.exp};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.background.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 20px;
`;
