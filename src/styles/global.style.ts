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
  }

  ol,ul {
    list-style-type: none;
  }

  
  :root {
    // Colors
    --white: #ffffff;
    --blue: #40578f;
    --font-color: rgb(199, 207, 237);
    --light-orange: #e55f3f;
    --light-yellow: #f1a845;
    --background: #001528;
    --background-secondary: #011a31;
    --dark-background: #000e1b;
    --light-background: green;

    /* Size */
    --font-small: 11px;
    --font-mini: 12px;
    --font-mid: 13px;
    --font-basic: 14px;
    --font-big: 15px;
    --font-large: 16px;
    --font-huge: 17px;

    /* Weight */
    --font-weight-normal: 500;
    --font-weight-basic: 600;
    --font-weight-main: 700;    
}
`;

export default GlobalStyle;
