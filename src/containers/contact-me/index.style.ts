import styled from "styled-components";

export const ContactMeStyle = styled.div`
  width: 100%;
  max-width: 555px;

  font-size: 15px;

  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 355px;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  width: 133px;
  height: 52px;

  margin: 32px auto 0;
`;

export const SocialWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 599px) {
    margin-top: 33px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;

    & a {
      width: 50px;
      height: 100%;
      padding: 10px;
    }
  }
`;
