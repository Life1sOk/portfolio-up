import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


  html,body {
    text-align: center;
    width: 100%;
    height: 100%;
  
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.main};
    background-color: ${({ theme }) => theme.background.main};
    scroll-behavior: smooth;
    font-weight: 500;
  }

  ol,ul {
    list-style-type: none;
  }

  
  :root {
    /* Size */
    --font-large: clamp(33px, 7vw, 56px);
    --font-big: clamp(23px, 5vw, 40px);
    --font-middle: clamp(14px, 3vw, 16px);
    --font-basic: clamp(13px, 3vw, 15px);

    /* Weight */
    --font-weight-normal: 500;
    --font-weight-basic: 600;
    --font-weight-main: 700;    
}
`;

export default GlobalStyle;
