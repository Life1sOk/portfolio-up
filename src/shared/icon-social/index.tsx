import React from "react";

import { IconSocialStyle } from "./index.style";

interface IComponent {
  url: string;
  icon: any;
  size?: string;
  sm: string;
}

const IconSocial = ({ url, icon, size, sm }: IComponent) => {
  return (
    <IconSocialStyle
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size={size}
      title={sm}
    >
      {icon}
    </IconSocialStyle>
  );
};

export default IconSocial;
