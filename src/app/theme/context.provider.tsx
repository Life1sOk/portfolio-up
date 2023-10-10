import { createContext, ReactNode, useState, useEffect } from "react";

type ThemeType = "light" | "dark" | string;
type ThemeContextType = { current: ThemeType; toggleHandler: (() => void) | null };

export const ThemeContext = createContext<ThemeContextType>({
  current: "light",
  toggleHandler: null,
});

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [current, setCurrent] = useState<ThemeType>("dark");

  const toggleHandler = () => {
    if (current === "light") {
      setCurrent("dark");
      window.localStorage.setItem("andrey-tsoy-theme", "dark");
    }
    if (current === "dark") {
      setCurrent("light");
      window.localStorage.setItem("andrey-tsoy-theme", "light");
    }
  };

  useEffect(() => {
    const value = window.localStorage.getItem("andrey-tsoy-theme");

    if (value) setCurrent(value);
  }, []);

  const value = { current, toggleHandler };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
