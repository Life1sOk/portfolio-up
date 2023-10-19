import styled from "styled-components";

export const ButtonWrapper = styled.div`
  position: relative;
  z-index: 7;

  width: 100%;
  height: 100%;
  min-width: 7.1875rem; /* 115px converted to rem */
  min-height: 2.625rem; /* 42px converted to rem */
  background-color: rgba(255, 255, 255);
  border-radius: 0.3125rem; /* 5px converted to rem */
  flex-shrink: 0;

  box-shadow: 0px 0px 0.5rem 0.125rem rgba(229, 95, 63, 0.75) inset;
  -webkit-box-shadow: 0px 0px 0.125rem 0.25rem rgba(0, 21, 40, 1) inset;
  -moz-box-shadow: 0px 0px 0.5rem 0.125rem rgba(229, 95, 63, 0.75) inset;
`;

export const ButtonStyle = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.button.background};
  border: 0.0625rem solid rgba(136, 146, 222, 0.3); /* 1px converted to rem */
  border-radius: 0.3125rem; /* 5px converted to rem */

  color: ${({ theme }) => theme.button.active};
  font-size: 0.78125rem; /* 12.5px converted to rem */
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.button.active};
    border: 0.0625rem solid ${({ theme }) => theme.button.active};
  }

  &:active {
    opacity: 0.92;
  }
`;
