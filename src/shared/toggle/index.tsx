import { useState, useEffect, ChangeEvent } from "react";

import { TbSunHigh, TbMoon } from "react-icons/tb";

import { useThemeHook } from "@components/app/theme/useTheme";

import { ToggleStyle, InputStyle, LabelStyle } from "./index.style";

const Toggle = () => {
  const [isActive, setIsActive] = useState(true);

  const { current, toggleHandler } = useThemeHook();

  const handleChange = () => {
    if (toggleHandler) toggleHandler();
  };

  useEffect(() => {
    if (current === "dark") setIsActive(true);
    if (current === "light") setIsActive(false);
  }, [current]);

  return (
    <ToggleStyle>
      <InputStyle
        checked={isActive}
        type="checkbox"
        name="mode"
        id="darkmode-toggle"
        onChange={handleChange}
      />
      <LabelStyle htmlFor="darkmode-toggle">
        <TbSunHigh title="sun" className="sun" />
        <TbMoon title="moon" className="moon" />
      </LabelStyle>
    </ToggleStyle>
  );
};

export default Toggle;
