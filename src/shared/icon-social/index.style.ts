import styled from "styled-components";

export const IconSocialStyle = styled.a<{ size?: string }>`
  width: fit-content;
  height: fit-content;

  padding: 0.4375rem; /* 7px converted to rem */
  color: ${({ theme }) => theme.color.secondary};

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: ${({ size }) =>
      size === "small"
        ? "1.25rem"
        : size === "normal"
        ? "1.5rem"
        : "1.5rem"}; /* 20px, 24px converted to rem */
    height: ${({ size }) =>
      size === "small"
        ? "1.25rem"
        : size === "normal"
        ? "1.5rem"
        : "1.5rem"}; /* 20px, 24px converted to rem */
  }

  &:hover {
    transition: color 0.2s;
    color: ${({ theme }) => theme.title.secondary};
  }
`;
