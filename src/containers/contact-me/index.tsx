import React from "react";

import { useTranslation } from "react-i18next";

import { locationBasics, socialMedia } from "../../utils/social-media";

import Mailto from "@components/shared/mail-to";
import Button from "@components/shared/button";
import Title from "@components/shared/title";
import Paragraph from "@components/shared/paragraph";
import IconSocial from "@components/shared/icon-social";

import {
  ContactMeStyle,
  TitleWrapper,
  ButtonWrapper,
  SocialWrapper,
} from "./index.style";

const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <ContactMeStyle>
      <TitleWrapper>
        <Title number={5} title={t("footer.title")} />
      </TitleWrapper>
      <Paragraph title={t("footer.lastDance.part1")} />
      <ButtonWrapper>
        <Mailto email={locationBasics.email}>
          <Button label={t("others.buttons.mail")} />
        </Mailto>
      </ButtonWrapper>
      <SocialWrapper>
        {socialMedia.map((social, index) => (
          <IconSocial key={index} icon={social.icon} url={social.url} sm={social.sm} />
        ))}
      </SocialWrapper>
    </ContactMeStyle>
  );
};

export default ContactMe;
