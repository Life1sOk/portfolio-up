import styled from "styled-components";

export const DescriptionUiStyle = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;

  padding: 0.75rem 1.375rem; /* 12px 22px converted to rem */

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 1045px) {
    padding: 1rem 1.4375rem 0.75rem 0;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 0.625rem; /* 10px converted to rem */
  font-size: var(--font-basic);
  line-height: 1.6;

  & p {
    text-align: left;
  }
`;

export const Links = styled.div`
  width: 100%;
  margin-top: 0.3125rem; /* 5px converted to rem */

  display: flex;
  justify-content: flex-end;
`;

export const InfoWrapper = styled.div`
  width: 100%;

  padding: 0.4375rem 0.4375rem 0.4375rem 0; /* 7px 7px 7px 0px converted to rem */
  margin-bottom: 0.625rem; /* 10px converted to rem */
  font-size: var(--font-small);

  display: flex;
  flex-direction: column;
  gap: 0.625rem; /* 10px converted to rem */
`;

export const Title = styled.h3`
  font-size: 1.0625rem; /* 17px converted to rem */
  color: ${({ theme }) => theme.color.main};
  margin: 0 0.4375rem 0.625rem 0; /* 7px 10px converted to rem */
  text-align: left;

  @media only screen and (min-width: 507px) {
    font-size: 1.125rem; /* 18px converted to rem */
  }
`;
