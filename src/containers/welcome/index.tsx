import { useTranslation } from "next-i18next";

import { exoTwo } from "@components/app/fonts";

import { locationBasics } from "@components/utils/social-media";

import Button from "@components/shared/button";
import Mailto from "@components/shared/mail-to";

import {
  WelcomeStyle,
  HelloTitle,
  TextStyle,
  MyName,
  MyProf,
  AboutStyle,
  ButtonWrapper,
} from "./index.style";

const WelcomePrev = () => {
  const { t } = useTranslation();

  return (
    <WelcomeStyle>
      <HelloTitle>{t("welcome.hello")}</HelloTitle>
      <TextStyle>
        <MyName className={exoTwo.className}>{t("welcome.name")}</MyName>
        <MyProf className={exoTwo.className}>{t("welcome.do")}</MyProf>
      </TextStyle>
      <AboutStyle>
        <p>{t("welcome.about")}</p>
        <p className="acc">{t("welcome.call")}</p>
      </AboutStyle>
      <ButtonWrapper>
        <Mailto email={locationBasics.email}>
          <Button label={t("others.buttons.mail")} />
        </Mailto>
      </ButtonWrapper>
    </WelcomeStyle>
  );
};

export default WelcomePrev;
