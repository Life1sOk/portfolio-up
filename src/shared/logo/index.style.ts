import styled from "styled-components";

export const LogoStyle = styled.div`
  width: 8.125rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
`;

export const WorldGlobus = styled.div`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.title.main};

  animation: logoRotation 12s linear infinite;

  @keyframes logoRotation {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  font-size: 1.56rem;
  font-weight: 400;
`;
