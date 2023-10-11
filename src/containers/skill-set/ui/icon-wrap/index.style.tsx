import styled from "styled-components";

export const IconWrapContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 75px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background.main};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;

  box-shadow: ${({ theme }) => theme.shadow.tools};
  -webkit-box-shadow: ${({ theme }) => theme.shadow.tools};
  -moz-box-shadow: ${({ theme }) => theme.shadow.tools};
`;

export const IconWrap = styled.div`
  width: 55%;
  max-width: 25px;
  aspect-ratio: 1 / 1;
  color: ${({ theme }) => theme.icon};

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.main};
  }
`;

export const NameFont = styled.span`
  font-size: 10.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.secondary};

  display: flex;
  align-items: center;
`;
