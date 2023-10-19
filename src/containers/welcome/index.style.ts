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
  margin-bottom: 1.25rem; /* 20px converted to rem */
  font-weight: 600;
`;

export const TextStyle = styled.div`
  font-style: normal;
  margin-bottom: 1.875rem; /* 30px converted to rem */
`;

export const MyName = styled.h1`
  font-size: var(--font-large);

  @media only screen and (max-width: 31.8125rem) {
    /* 509px converted to rem */
    margin-bottom: 0.3125rem; /* 5px converted to rem */
  }
`;

export const MyProf = styled.h2`
  max-width: 34.6875rem; /* 555px converted to rem */

  font-size: var(--font-big);
  color: ${({ theme }) => theme.color.secondary};
`;

export const AboutStyle = styled.article`
  display: flex;
  flex-direction: column;

  margin-bottom: 2.125rem; /* 34px converted to rem */
  max-width: 35.375rem; /* 566px converted to rem */

  color: ${({ theme }) => theme.color.secondary};
  font-size: var(--font-basic);
  line-height: 1.6;

  .acc {
    margin-top: 1.25rem; /* 20px converted to rem */
    font-size: var(--font-middle);
    font-weight: 600;
    color: ${({ theme }) => theme.title.main};
  }

  @media only screen and (max-width: 37.4375rem) {
    /* 599px converted to rem */
    margin-bottom: 2.0625rem; /* 33px converted to rem */
  }
`;

export const ButtonWrapper = styled.div`
  width: 8.3125rem; /* 133px converted to rem */
  height: 3.25rem; /* 52px converted to rem */
`;
