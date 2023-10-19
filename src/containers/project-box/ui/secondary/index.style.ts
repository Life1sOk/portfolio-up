import styled from "styled-components";

export const SmallBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.625rem; /* 10px converted to rem */
  padding: 0.9375rem 1.4375rem; /* 15px 23px converted to rem */
`;

export const BoxTop = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LinksMain = styled.div`
  display: flex;
`;

export const FolderIcon = styled.div`
  width: 1.8125rem; /* 29px converted to rem */

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h4`
  text-align: left;
  font-size: 0.96875rem; /* 15.5px converted to rem */
  padding: 0.625rem 0;

  @media only screen and (min-width: 507px) {
    font-size: 1.0625rem; /* 17px converted to rem */
  }
`;

export const Description = styled.p`
  height: fit-content;
  min-height: 6.1875rem; /* 99px converted to rem */

  font-size: 0.8125rem; /* 13px converted to rem */
  color: ${({ theme }) => theme.color.secondary};
  padding: 0.3125rem 0 0.625rem 0; /* 5px 0 10px 0 converted to rem */
  text-align: left;
  line-height: 1.5;
`;
