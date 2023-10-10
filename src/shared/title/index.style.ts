import styled from "styled-components";

export const TitleStyle = styled.div<{ procent?: number }>`
  width: ${({ procent }) => (procent ? `${procent}%` : "100%")};
  height: 40px;

  margin-bottom: 40px;

  font-size: 33px;
  font-weight: 600;
  color: ${({ theme }) => theme.title.main};
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 10px;

  &::after {
    content: "";
    width: 100%;
    height: 1.5px;
    background-color: ${({ theme }) => theme.title.secondary};
    margin-top: 5px;
  }

  @media only screen and (max-width: 599px) {
    font-size: 29px;
  }
`;

export const TitleNumber = styled.h2`
  width: fit-content;
  color: ${({ theme }) => theme.title.secondary};
  font-size: 25px;
  margin-top: 5px;
`;
