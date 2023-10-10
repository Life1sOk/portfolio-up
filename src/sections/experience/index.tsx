import { forwardRef } from "react";
import { useTranslation } from "next-i18next";

import Title from "@components/shared/title";

import { PointExperience } from "./ui";
import { useDataExp } from "./hook/useDataExp";

import { ExperienceStyle, FlagsWrapper } from "./index.style";

const ExperienceSub = forwardRef<HTMLElement>(function Skills(_, ref) {
  const { t } = useTranslation();

  const { data } = useDataExp();

  return (
    <ExperienceStyle ref={ref}>
      <Title title={t("experience.title")} number={4} procent={44} />
      <FlagsWrapper>
        {data.map((point) => (
          <PointExperience data={point} key={point.company} />
        ))}
      </FlagsWrapper>
    </ExperienceStyle>
  );
});

export default ExperienceSub;
