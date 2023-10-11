import React from "react";

import { russoOne } from "@components/app/fonts";

import { IconWrapContainer, IconWrap, NameFont } from "./index.style";

interface IComponent {
  icon: React.JSX.Element;
  name: string;
}

const Icon = ({ icon, name }: IComponent) => {
  return (
    <IconWrapContainer>
      <IconWrap>{icon}</IconWrap>
      <NameFont className={russoOne.className}>{name}</NameFont>
    </IconWrapContainer>
  );
};

export default Icon;
