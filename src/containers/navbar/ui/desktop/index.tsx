import React, { useId } from "react";
import { useTranslation } from "next-i18next";

import ResumeWrapper from "@components/wrappers/resume-wrapper";
import Translate from "@components/shared/translate";
import Toggle from "@components/shared/toggle";
import Button from "@components/shared/button";

import { useGenerateLinks } from "../../hooks/useGenerateLinks";

import { DesktopNavbarStyle, DesktopNavbarSide, LinkWrapper } from "./index.style";

interface IComponent {
  scrollHandler: (data: string) => void;
}

const DesktopNavbar = ({ scrollHandler }: IComponent) => {
  const uniqueId = useId();

  const { t, i18n } = useTranslation();
  const links = useGenerateLinks();

  const scrollAndOpenHandler = (link: string) => scrollHandler(link);

  return (
    <DesktopNavbarStyle>
      {links.map((link, index) => (
        <LinkWrapper
          key={uniqueId + index}
          onClick={() => scrollAndOpenHandler(link.scroll)}
        >
          <span className="number">{`0${index + 1}. `}</span>
          <span className="link">{link.title}</span>
        </LinkWrapper>
      ))}
      <DesktopNavbarSide>
        <ResumeWrapper lang={i18n.resolvedLanguage!}>
          <Button label={t("others.buttons.resume")} />
        </ResumeWrapper>
        <Toggle />
        <Translate type="column" />
      </DesktopNavbarSide>
    </DesktopNavbarStyle>
  );
};

export default DesktopNavbar;
