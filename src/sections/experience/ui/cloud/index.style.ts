import styled from "styled-components";

export const CloudStyle = styled.div`
  width: 100%;
  height: fit-content;

  color: ${({ theme }) => theme.color.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem; /* 10px converted to rem */
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: fit-content;

  font-size: var(--font-small);
  padding: 0.8125rem 1rem; /* 13px 16px converted to rem */
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.625rem; /* 10px converted to rem */
  border: 0.0625rem solid ${({ theme }) => theme.title.shadow}; /* 1px converted to rem */

  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* 8px converted to rem */

  @keyframes cloudAnimation {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-0.3125rem); /* -5px converted to rem */
    }
  }

  & .infinit {
    font-size: 0.875rem; /* 14px converted to rem */
    font-weight: 600;
    color: green;
  }
`;

export const CloudSmall = styled.div`
  width: 16%;
  height: 10px;

  background-color: ${({ theme }) => theme.title.main};
  border-radius: 10px;
  border: 1px solid rgba(125, 125, 125, 0.1);

  animation-name: cloudAnimation;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export const CloudBall = styled.div`
  width: 4.5%;
  aspect-ratio: 1 / 1;

  background-color: ${({ theme }) => theme.title.main};
  border-radius: 50%;
  border: 1px solid rgba(125, 125, 125, 0.1);

  animation-name: cloudAnimation;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
