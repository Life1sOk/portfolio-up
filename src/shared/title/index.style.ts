import styled from "styled-components";

export const TitleStyle = styled.div<{ procent?: number }>`
  width: ${({ procent }) => (procent ? `${procent}%` : "100%")};
  height: 2.5rem;

  margin-bottom: 2.5rem;

  font-size: clamp(1.43rem, 5vw, 1.875rem);
  font-weight: 600;
  color: ${({ theme }) => theme.title.main};
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 0.625rem;

  &::after {
    content: "";
    width: 100%;
    height: 0.093rem;
    background-color: ${({ theme }) => theme.title.secondary};
    margin-top: 0.31rem;
  }

  @media only screen and (max-width: 599px) {
    margin-bottom: 1.875rem;
  }
`;

export const TitleNumber = styled.h3`
  width: fit-content;
  color: ${({ theme }) => theme.title.secondary};
  font-size: clamp(0.93rem, 4vw, 1.31rem);
`;
