import { useContext } from "react";

import { ThemeContext } from "./context.provider";

export const useThemeHook = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme failed");
  }

  return context;
};
