import React from "react";

import { useTranslation } from "next-i18next";

import { TranslateStyle, Picker } from "./index.style";

interface IComponent {
  type: "row" | "column";
  toggleAction?: () => void;
}

const Translate = ({ type, toggleAction }: IComponent) => {
  const { i18n } = useTranslation("common");

  const handleLngToggle = (data: "en" | "ru") => {
    i18n.changeLanguage(data);
    if (toggleAction) toggleAction();
  };

  return (
    <TranslateStyle type={type}>
      <Picker
        $state={!!(i18n.resolvedLanguage === "en")}
        onClick={() => handleLngToggle("en")}
        type={type}
      >
        en
      </Picker>
      <Picker
        $state={!!(i18n.resolvedLanguage === "ru")}
        onClick={() => handleLngToggle("ru")}
        type={type}
      >
        ru
      </Picker>
    </TranslateStyle>
  );
};

export default Translate;
