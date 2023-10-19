import Link from "next/link";

import { useTranslation } from "next-i18next";

import { TranslateStyle, Picker } from "./index.style";

interface IComponent {
  type: "row" | "column";
  toggleAction?: () => void;
}

const Translate = ({ type, toggleAction }: IComponent) => {
  const { i18n } = useTranslation("common");

  const handleLngToggle = () => {
    if (toggleAction) toggleAction();
  };

  return (
    <TranslateStyle type={type}>
      <Link title="english toggle" href="/" locale="en" onClick={() => handleLngToggle()}>
        <Picker $state={!!(i18n.resolvedLanguage === "en")} type={type}>
          en
        </Picker>
      </Link>
      <Link
        title="russion roggle"
        href="/ru"
        locale="ru"
        onClick={() => handleLngToggle()}
      >
        <Picker $state={!!(i18n.resolvedLanguage === "ru")} type={type}>
          ru
        </Picker>
      </Link>
    </TranslateStyle>
  );
};

export default Translate;
