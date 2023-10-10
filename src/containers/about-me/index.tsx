import { useTranslation } from "react-i18next";

import Title from "@components/shared/title";
import Paragraph from "@components/shared/paragraph";

import { AboutWrapper, AboutMeStyle } from "./index.style";

const AboutMeContainer = () => {
  const { t } = useTranslation();

  return (
    <AboutWrapper>
      <Title number={1} title={t("about.title")} />
      <AboutMeStyle>
        <Paragraph title={t("about.part1")} />
        <Paragraph title={t("about.part2")} />
        <Paragraph title={t("about.part3")} />
      </AboutMeStyle>
    </AboutWrapper>
  );
};

export default AboutMeContainer;
