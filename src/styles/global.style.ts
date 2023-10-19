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
    color: ${({ theme }) => theme.color.main};
    background-color: ${({ theme }) => theme.background.main};
    scroll-behavior: smooth;
    font-weight: 500;
  }

  ol,ul {
    list-style-type: none;
  }

  a:link, a:visited {
    text-decoration: none;
}

  
:root {
  /* Size */
  --font-large: clamp(2.125rem, 6vw, 3.5rem);
  --font-big: clamp(1.5rem, 4.2vw, 2.5rem); 
  --font-middle: clamp(.875rem, 2.64vw, 1rem);
  --font-basic: clamp(.8125rem, 2.4vw, .90625rem);
  --font-small: clamp(.6875rem, 2vw, .78125rem);

  /* Weight */
  --font-weight-normal: 500;
  --font-weight-basic: 600;
  --font-weight-main: 700;    
}


@media only screen and (min-width: 1699px) {
    html {
      font-size: 19.5px;
    }
  }
`;

export default GlobalStyle;
