import styled from "styled-components";

export const MobileNavbarStyle = styled.div`
  min-width: 320px;
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

  padding: 27px 63px 0 34px;

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

  padding: 17px 48px;

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
  font-size: 18px;
  padding: 25px 0;
  border-bottom: 1px solid transparent;

  display: flex;
  align-items: flex-end;
  gap: 13px;

  .link {
    color: var(--font-color);
    color: ${({ theme }) => theme.color.secondary};
    font-size: 21px;
  }

  .number {
    margin-right: 3px;
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
    padding: 18px 0;
  }
`;
