import React from "react";

import { IconWrapContainer, IconWrap, NameFont } from "./index.style";

interface IComponent {
  icon: React.JSX.Element;
  name: string;
}

const Icon = ({ icon, name }: IComponent) => {
  return (
    <IconWrapContainer>
      <IconWrap>{icon}</IconWrap>
      <NameFont>{name}</NameFont>
    </IconWrapContainer>
  );
};

export default Icon;
