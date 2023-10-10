import React from "react";
import { useTranslation } from "next-i18next";

import ResumeWrapper from "@components/wrappers/resume-wrapper";
import Translate from "@components/shared/translate";
import Toggle from "@components/shared/toggle";
import Button from "@components/shared/button";

import { useGenerateLinks } from "../../hooks/useGenerateLinks";

import {
  MobileNavbarStyle,
  TopStyle,
  ToggleWrapper,
  LinksWrapper,
  ButtonContainer,
  LinkWord,
} from "./index.style";

interface IComponent {
  scrollHandler: (data: string) => void;
  openNavHandler: () => void;
}

const MobileNavbar = ({ scrollHandler, openNavHandler }: IComponent) => {
  const { t, i18n } = useTranslation("common");

  const links = useGenerateLinks();

  const toggleHandler = () => {
    if (openNavHandler) openNavHandler();
  };

  const scrollAndOpenHandler = (link: string) => {
    if (scrollHandler) scrollHandler(link);
    toggleHandler();
  };

  return (
    <MobileNavbarStyle>
      <TopStyle>
        <Translate type="row" toggleAction={toggleHandler} />
        <ToggleWrapper>
          <Toggle />
        </ToggleWrapper>
      </TopStyle>
      <LinksWrapper>
        {links.map((link, index) => (
          <LinkWord key={index} onClick={() => scrollAndOpenHandler(link.scroll)}>
            <span className="number">{`0${index + 1}. `}</span>
            <span className="link">{link.title}</span>
          </LinkWord>
        ))}
      </LinksWrapper>
      <ButtonContainer>
        <ResumeWrapper lang={i18n.resolvedLanguage!}>
          <Button label={t("others.buttons.resume")} />
        </ResumeWrapper>
      </ButtonContainer>
    </MobileNavbarStyle>
  );
};

export default MobileNavbar;
