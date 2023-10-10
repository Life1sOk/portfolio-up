import styled from "styled-components";

interface IPicker {
  type: "row" | "column";
  $state: boolean;
}

export const TranslateStyle = styled.div<{ type: "row" | "column" }>`
  width: fit-content;
  height: 100%;
  max-height: 44px;

  display: flex;
  flex-direction: ${({ type }) => (type ? type : "row")};
  justify-content: space-around;
  gap: ${({ type }) => (type === "row" ? "15px" : "0")};
`;

export const Picker = styled.p<IPicker>`
  border: none;
  background-color: transparent;
  width: ${({ type }) => (type === "row" ? "55px" : "fit-content")};
  padding: ${({ type }) => (type === "row" ? "5px" : "2.5px  5px 2.5px 0")};

  font-size: ${({ type }) => (type === "row" ? "22px" : "12px")};
  font-weight: ${({ type }) => (type === "row" ? "initial" : "600")};
  color: ${({ $state, theme }) => ($state ? theme.title.main : theme.color.secondary)};

  &:hover {
    cursor: pointer;
    opacity: ${({ $state }) => ($state ? "1" : ".8")};
  }
`;
