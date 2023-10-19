import styled from "styled-components";

export const MobileNavbarStyle = styled.div`
  min-width: 20rem; /* 320px converted to rem */
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.main};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopStyle = styled.div`
  width: 100%;
  height: fit-content;

  padding: 1.6875rem 3.9375rem 0 2.125rem; /* 27px 63px 0 34px converted to rem */

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToggleWrapper = styled.div`
  transform: scale(1.4);

  width: fit-content;
  height: fit-content;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: fit-content;

  padding: 1.0625rem 3rem; /* 17px 48px converted to rem */

  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkWord = styled.div`
  font-size: 1.125rem; /* 18px converted to rem */
  padding: 1.5625rem 0; /* 25px converted to rem */
  border-bottom: 1px solid transparent;

  display: flex;
  align-items: flex-end;
  gap: 0.8125rem; /* 13px converted to rem */

  .link {
    color: var(--font-color);
    color: ${({ theme }) => theme.color.secondary};
    font-size: 1.3125rem; /* 21px converted to rem */
  }

  .number {
    margin-right: 0.1875rem; /* 3px converted to rem */
    color: ${({ theme }) => theme.title.main};
  }

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.color.main};

    .link {
      color: ${({ theme }) => theme.color.main};
    }
  }

  @media only screen and (max-width: 700px) {
    padding: 1.125rem 0; /* 18px converted to rem */
  }
`;
