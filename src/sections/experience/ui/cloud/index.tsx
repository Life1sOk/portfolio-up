import { useTranslation } from "next-i18next";

import Space from "@components/shared/space";

import { CloudStyle, MainWrapper, CloudSmall, CloudBall } from "./index.style";

interface IComponent {
  position: string;
  start: string;
  end: string;
}

const Cloud = ({ position, start, end }: IComponent) => {
  const { t } = useTranslation();

  return (
    <CloudStyle>
      <CloudBall />
      <CloudSmall />
      <MainWrapper>
        <Space title={t("others.status.position")} desc={<span>{position}</span>} />
        <Space title={t("others.status.start")} desc={<span>{start}</span>} />
        <Space
          title={t("others.status.end")}
          desc={<span className={end === "∞" ? "infinit" : ""}>{end}</span>}
        />
      </MainWrapper>
    </CloudStyle>
  );
};

export default Cloud;
