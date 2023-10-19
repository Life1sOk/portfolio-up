import styled from "styled-components";

export const FlagStyle = styled.div<{ color?: string }>`
  width: fit-content;
  height: fit-content;

  border-radius: 0.25rem; /* 4px converted to rem */
  padding: 0.75rem 1rem; /* 12px 16px converted to rem */
  box-shadow: ${({ color }) => (color ? color : "rgba(149, 157, 165, 0.2)")} 0px 2rem 6rem; /* 0px 8px 24px converted to rem */
  border: 0.0625rem solid ${({ color }) => (color ? color : "rgba(149, 157, 165, 0.2)")}; /* 1px converted to rem */

  display: flex;
  flex-direction: column;
`;

export const FlagTitle = styled.div`
  font-size: 0.875rem; /* 14px converted to rem */
  font-weight: 500;
`;

export const ImageWrapper = styled.div`
  padding: 0.625rem; /* 10px converted to rem */
`;
