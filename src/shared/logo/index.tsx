import React from "react";
import { TbWorld } from "react-icons/tb";

import { exoTwo } from "@components/app/fonts";

import { LogoStyle, WorldGlobus, Name } from "./index.style";

const Logo = () => {
  return (
    <LogoStyle>
      <WorldGlobus>
        <TbWorld />
      </WorldGlobus>
      <Name className={exoTwo.className}>ANDREY</Name>
    </LogoStyle>
  );
};

export default Logo;
