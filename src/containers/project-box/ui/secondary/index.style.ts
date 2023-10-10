import styled from "styled-components";

export const SmallBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  max-width: 371.55px;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 10px;
  padding: 15px 10px;
`;

export const BoxTop = styled.div`
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksMain = styled.div`
  display: flex;
`;

export const FolderIcon = styled.div`
  width: 55px;
  padding: 0 11px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h4`
  text-align: left;
  font-size: 16.5px;
  padding: 5px 0 10px 10px;
`;

export const Description = styled.p`
  height: 62px;

  overflow-y: scroll;

  font-size: 13px;
  color: ${({ theme }) => theme.color.secondary};
  margin: 5px 0 5px 10px;
  padding-right: 10px;
  text-align: left;
  line-height: 1.5;

  /* width */
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.title.secondary};
    border-radius: 10px;
  }
`;
