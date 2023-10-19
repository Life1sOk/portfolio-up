import styled from "styled-components";

export const IconWrapContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 4.6875rem; /* 75px converted to rem */
  border-radius: 0.3125rem; /* 5px converted to rem */
  background-color: ${({ theme }) => theme.background.main};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6875rem; /* 11px converted to rem */

  box-shadow: ${({ theme }) => theme.shadow.tools};
  -webkit-box-shadow: ${({ theme }) => theme.shadow.tools};
  -moz-box-shadow: ${({ theme }) => theme.shadow.tools};
`;

export const IconWrap = styled.div`
  width: 55%;
  max-width: 1.5625rem; /* 25px converted to rem */
  aspect-ratio: 1/1;
  color: ${({ theme }) => theme.icon};

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.secondary};
  }
`;

export const NameFont = styled.span`
  font-size: 0.6875rem; /* 11px converted to rem */
  font-weight: 600;
  color: ${({ theme }) => theme.color.main};

  display: flex;
  align-items: center;
`;
