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

export const HelloTitle = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.title.main};
  margin-bottom: 20px;
`;

export const TextStyle = styled.div`
  font-style: normal;
  margin-bottom: 30px;
`;

export const MyName = styled.h2`
  font-size: 56px;

  @media only screen and (max-width: 599px) {
    font-size: 44px;
  }
`;

export const MyProf = styled.h3`
  max-width: 555px;

  font-size: 40px;
  color: ${({ theme }) => theme.color.secondary};

  @media only screen and (max-width: 599px) {
    font-size: 33px;
  }
`;

export const AboutStyle = styled.article`
  display: flex;
  flex-direction: column;

  margin-bottom: 34px;
  max-width: 566px;

  color: ${({ theme }) => theme.color.secondary};
  font-size: 15.5px;
  line-height: 1.6;

  .acc {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
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
