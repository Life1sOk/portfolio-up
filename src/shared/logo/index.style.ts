import styled from "styled-components";

export const LogoStyle = styled.div`
  width: 160px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const WorldGlobus = styled.div`
  width: 32px;
  height: 32px;
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
  font-size: 25px;
  font-weight: 400;
`;
