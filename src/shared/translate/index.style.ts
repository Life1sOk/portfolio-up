import styled from "styled-components";

interface IPicker {
  type: "row" | "column";
  $state: boolean;
}

export const TranslateStyle = styled.div<{ type: "row" | "column" }>`
  width: fit-content;
  height: 100%;
  max-height: 2.75rem; /* 44px converted to rem */

  display: flex;
  flex-direction: ${({ type }) => (type ? type : "row")};
  justify-content: space-around;
  gap: ${({ type }) => (type === "row" ? "0.9375rem" : "0")}; /* 15px converted to rem */
`;

export const Picker = styled.p<IPicker>`
  border: none;
  background-color: transparent;
  width: ${({ type }) =>
    type === "row" ? "3.4375rem" : "fit-content"}; /* 55px converted to rem */
  padding: ${({ type }) =>
    type === "row"
      ? "0.3125rem"
      : "0.15625rem 0.3125rem 0.15625rem 0"}; /* 5px converted to rem */

  font-size: ${({ type }) =>
    type === "row" ? "1.375rem" : "0.75rem"}; /* 22px converted to rem */
  font-weight: ${({ type }) => (type === "row" ? "initial" : "600")};
  color: ${({ $state, theme }) => ($state ? theme.title.main : theme.color.secondary)};

  &:hover {
    cursor: pointer;
    opacity: ${({ $state }) => ($state ? "1" : ".8")};
  }
`;
