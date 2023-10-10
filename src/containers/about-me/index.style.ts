import styled from "styled-components";

export const AboutMeStyle = styled.div`
  width: 100%;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 15px;
  line-height: 1.6;
  font-weight: 500;

  & p {
    text-align: left;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 521px;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;
