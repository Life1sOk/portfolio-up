import styled from "styled-components";

export const IconSocialStyle = styled.a<{ size?: string }>`
  width: fit-content;
  height: fit-content;

  padding: 7px;
  color: ${({ theme }) => theme.color.secondary};

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: ${({ size }) =>
      size === "small" ? "20px" : size === "normal" ? "24px" : "24px"};
    height: ${({ size }) =>
      size === "small" ? "20px" : size === "normal" ? "24px" : "24px"};
  }

  &:hover {
    transition: color 0.2s;
    color: ${({ theme }) => theme.title.secondary};
  }
`;
