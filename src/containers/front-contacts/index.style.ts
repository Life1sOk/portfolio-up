import styled from "styled-components";

const Basic = styled.div`
  width: 3.125rem; /* 50px converted to rem */
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4375rem; /* 7px converted to rem */

  @media only screen and (max-width: 771px) {
    display: none;
  }
`;

export const SocialContacts = styled(Basic)`
  position: fixed;
  left: 1.5625rem; /* 25px converted to rem */
  bottom: 1.25rem; /* 20px converted to rem */
`;

export const EmailLink = styled(Basic)`
  position: fixed;
  right: 1.5625rem; /* 25px converted to rem */
  bottom: 1.25rem; /* 20px converted to rem */
`;

export const Email = styled.span`
  font-size: 0.8125rem; /* 13px converted to rem */
  letter-spacing: 0.125rem; /* 2px converted to rem */
  color: ${({ theme }) => theme.color.secondary};

  writing-mode: vertical-rl;
  text-orientation: sideways-right;

  &:hover {
    cursor: pointer;
    transition: color 0.2s;
    color: ${({ theme }) => theme.title.secondary};
  }
`;

export const StartLine = styled.div`
  width: 0.0625rem; /* 1px converted to rem */
  height: 5.625rem; /* 90px converted to rem */
  border-radius: 0.1875rem; /* 3px converted to rem */
  background-color: ${({ theme }) => theme.title.secondary};
`;
