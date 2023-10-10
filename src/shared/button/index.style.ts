import styled from "styled-components";

export const ButtonWrapper = styled.div`
  position: relative;
  z-index: 7;

  width: 100%;
  height: 100%;
  min-width: 115px;
  min-height: 42px;
  background-color: rgba(255, 255, 255);
  border-radius: 5px;
  flex-shrink: 0;

  box-shadow: 0px 0px 8px 2px rgba(229, 95, 63, 0.75) inset;
  -webkit-box-shadow: 0px 0px 2px 4px rgba(0, 21, 40, 1) inset;
  -moz-box-shadow: 0px 0px 8px 2px rgba(229, 95, 63, 0.75) inset;
`;

export const ButtonStyle = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.button.background};
  border: 1px solid rgba(136, 146, 222, 0.3);
  border-radius: 5px;

  color: ${({ theme }) => theme.button.active};
  font-size: 13px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.button.active};
    border: 1px solid ${({ theme }) => theme.button.active};
  }

  &:active {
    opacity: 0.92;
  }
`;
