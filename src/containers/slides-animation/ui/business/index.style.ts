import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14%;
`;

export const Middle = styled.div`
  width: 100%;
  height: 30%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2%;
  align-items: center;
  justify-items: center;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 20%;
  margin-bottom: 3%;
`;
