import styled from "styled-components";

export const WelcomeStyle = styled.div`
  width: fit-content;
  height: 100%;

  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;

  animation-name: open;
  animation-duration: 1s;

  @keyframes open {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const HelloTitle = styled.p`
  font-size: var(--font-middle);
  color: ${({ theme }) => theme.title.main};
  margin-bottom: 20px;
  font-weight: 700;
`;

export const TextStyle = styled.div`
  font-style: normal;
  margin-bottom: 30px;
`;

export const MyName = styled.h1`
  font-size: var(--font-large);

  @media only screen and (max-width: 509px) {
    margin-bottom: 5px;
  }
`;

export const MyProf = styled.h2`
  max-width: 555px;

  font-size: var(--font-big);
  color: ${({ theme }) => theme.color.secondary};
`;

export const AboutStyle = styled.article`
  display: flex;
  flex-direction: column;

  margin-bottom: 34px;
  max-width: 566px;

  color: ${({ theme }) => theme.color.secondary};
  font-size: var(--font-basic);
  line-height: 1.6;

  .acc {
    margin-top: 20px;
    font-size: var(--font-middle);
    font-weight: 700;
    color: ${({ theme }) => theme.title.main};
  }

  @media only screen and (max-width: 599px) {
    margin-bottom: 33px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 133px;
  height: 52px;
`;
