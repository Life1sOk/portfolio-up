import styled from "styled-components";

const Basic = styled.div`
  width: 50px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  @media only screen and (max-width: 771px) {
    display: none;
  }
`;

export const SocialContacts = styled(Basic)`
  position: fixed;
  left: 25px;
  bottom: 20px;
`;

export const EmailLink = styled(Basic)`
  position: fixed;
  right: 25px;
  bottom: 20px;
`;

export const Email = styled.span`
  font-size: 13px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.color.secondary};

  writing-mode: vertical-rl;
  text-orientation: reverse;

  &:hover {
    cursor: pointer;
    transition: color 0.2s;
    color: ${({ theme }) => theme.title.secondary};
  }
`;

export const StartLine = styled.div`
  width: 1px;
  height: 90px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.title.secondary};
`;
