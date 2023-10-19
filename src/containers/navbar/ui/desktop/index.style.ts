import styled from "styled-components";

export const DesktopNavbarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DesktopNavbarSide = styled.div`
  margin-left: 0.75rem;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  gap: 1.4375rem;
`;

export const LinkWrapper = styled.p`
  padding: 0.31rem 0.31rem 0.5rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.opacity};
  margin-right: 1.375rem;

  .link {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.color.secondary};
    font-weight: 600;
  }

  .number {
    font-size: 0.69rem;
    font-weight: 600;
    margin-right: 0.1875rem;
    color: ${({ theme }) => theme.title.main};
  }

  &:hover {
    cursor: pointer;
    border-bottom: 0.0625rem solid ${({ theme }) => theme.color.main};

    .link {
      color: ${({ theme }) => theme.color.main};
    }
  }
`;
