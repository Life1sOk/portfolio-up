import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { inter } from "@components/app/fonts";

import ThemeContextProvider from "@components/app/theme/context.provider";
import WithTheme from "@components/app/theme/theme.provider";
import GlobalStyle from "@components/styles/global.style";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContextProvider>
      <WithTheme>
        <div className={inter.className}>
          <GlobalStyle />
          <Component {...pageProps} />
        </div>
      </WithTheme>
    </ThemeContextProvider>
  );
};

export default appWithTranslation(App);
