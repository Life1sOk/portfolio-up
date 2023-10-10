import React from "react";

import { FiExternalLink, FiGithub } from "react-icons/fi";

import { TbBrandTelegram, TbBrandFacebook, TbBrandWhatsapp } from "react-icons/tb";

export const socialMedia = [
  {
    sm: "Github",
    icon: <FiGithub />,
    url: "https://github.com/Life1sOk",
  },
  {
    sm: "telegram",
    icon: <TbBrandTelegram />,
    url: "https://t.me/mrandreyt",
  },
  {
    sm: "whatsapp",
    icon: <TbBrandWhatsapp />,
    url: "https://wa.me/77056187051",
  },
];

export const locationBasics = {
  email: "andreytsoy.webdev@gmail.com",
  number: "+77056187051",
  location: "Kazakhstan, Almaty",
};

export const socialIcons = {
  github: <FiGithub />,
  view: <FiExternalLink />,
};
