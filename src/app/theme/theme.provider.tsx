import { ThemeProvider } from "styled-components";

import { useThemeHook } from "./useTheme";

import { darkTheme } from "./types/dark";
import { lightTheme } from "./types/light";

const WithTheme = ({ children }: { children: React.ReactNode }) => {
  const { current } = useThemeHook();

  return (
    <ThemeProvider theme={current === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default WithTheme;
