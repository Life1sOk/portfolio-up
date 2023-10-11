import { useState, useEffect, useId } from "react";

import { TbSunHigh, TbMoon } from "react-icons/tb";

import { useThemeHook } from "@components/app/theme/useTheme";

import { ToggleStyle, InputStyle, LabelStyle } from "./index.style";

interface IComponenet {
  toggleAction?: (data: boolean) => void;
}

const Toggle = ({ toggleAction }: IComponenet) => {
  const uniqueId = useId();

  const [isActive, setIsActive] = useState(true);

  const { current, toggleHandler } = useThemeHook();

  const handleChange = () => {
    if (toggleHandler) toggleHandler();
    if (toggleAction) toggleAction(false);
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
        id={uniqueId}
        onChange={handleChange}
      />
      <LabelStyle htmlFor={uniqueId}>
        <TbSunHigh title="sun" className="sun" />
        <TbMoon title="moon" className="moon" />
      </LabelStyle>
    </ToggleStyle>
  );
};

export default Toggle;
