import styled from "styled-components";

export const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 22;

  width: 100%;
  min-width: 20rem;
  background-color: ${({ theme }) => theme.background.main};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 1s;

  box-shadow: ${({ theme }) => theme.shadow.navigation};
  -webkit-box-shadow: ${({ theme }) => theme.shadow.navigation};
  -moz-box-shadow: ${({ theme }) => theme.shadow.navigation};
`;

export const NavWrapper = styled.div`
  width: 100%;
  max-width: 81.25rem;
  height: 4.09rem;
  padding: 0 2.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 599px) {
    padding: 0 22px;
  }
`;

export const BurgerWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 1044px) {
    display: initial;
    position: relative;
    z-index: 105;
  }
`;

export const NavAsideWrapper = styled.div`
  display: initial;

  @media only screen and (max-width: 1044px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  &:hover {
    cursor: pointer;
  }
`;
