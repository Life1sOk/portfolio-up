import styled from "styled-components";

export const DesktopNavbarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DesktopNavbarSide = styled.div`
  margin-left: 12px;
  font-size: 14px;

  display: flex;
  align-items: center;
  gap: 23px;
`;

export const LinkWrapper = styled.p`
  padding: 5px 5px 8px 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.opacity};
  margin-right: 22px;

  .link {
    font-size: 12px;
    color: ${({ theme }) => theme.color.secondary};
    font-weight: 600;
  }

  .number {
    font-size: 11px;
    font-weight: 600;
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
`;
