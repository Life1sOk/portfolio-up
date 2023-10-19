import styled from "styled-components";

export const ContactMeStyle = styled.div`
  width: 100%;
  max-width: 34.6875rem; /* 555px converted to rem */
  font-size: var(--font-basic);

  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 22.1875rem; /* 355px converted to rem */
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  width: 8.3125rem; /* 133px converted to rem */
  height: 3.25rem; /* 52px converted to rem */
  margin: 2rem auto 0;
`;

export const SocialWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 599px) {
    margin-top: 2.0625rem; /* 33px converted to rem */

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.375rem; /* 22px converted to rem */

    & a {
      width: 3.125rem; /* 50px converted to rem */
      height: 100%;
      padding: 0.625rem; /* 10px converted to rem */
    }
  }
`;
