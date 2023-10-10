import styled from "styled-components";

export const CopyrightContainer = styled.div`
  width: fit-content;
  font-size: 10px;
  padding: 5px;
  color: ${({ theme }) => theme.color.secondary};

  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
