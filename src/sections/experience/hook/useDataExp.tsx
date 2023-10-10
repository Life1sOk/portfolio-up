import { useTranslation } from "next-i18next";

export const useDataExp = () => {
  const { t } = useTranslation();

  const data = [
    {
      company: `${t("experience.project1.title")}`,
      position: "Web developer",
      color: "rgba(23, 212, 92, 0.4)",
      src: "/icons/study.gif",
      start: "01.06.22",
      end: "∞",
    },
    {
      company: "TOO Kleo",
      position: "Full Stack developer",
      color: "rgba(0, 128, 255, 0.4)",
      src: "/icons/kleo-logo.svg",
      start: "01.09.22",
      end: "∞",
    },
  ];

  return { data };
};
