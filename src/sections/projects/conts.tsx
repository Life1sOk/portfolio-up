import { useTranslation } from "next-i18next";

import profile from "../../../public/images/profile.webp";
import linker from "../../../public/images/linker-pro.webp";

import type { IMainProject } from "@components/containers/project-box";

export const useProjectStore = () => {
  const { t } = useTranslation();

  const projects: IMainProject[] = [
    {
      title: `${t("projects.big.project2.title")}`,
      status: "process",
      position: "Full Stack developer",
      image: { screen: linker },
      description: `${t("projects.big.project2.description")}`,
      tools: ["TypeScript", "RTK", "React", "Node.js", "PostgreSQL"],
      links: {
        github: "https://github.com/Life1sOk/link-saver",
        // website: "https://life1sok.github.io/link-saver/",
      },
    },
    {
      title: `${t("projects.big.project3.title")}`,
      status: "finished",
      position: "Full Stack developer",
      image: { screen: profile },
      description: `${t("projects.big.project3.description")}`,
      tools: ["React", "Styled. comp.", "i18n"],
      links: {
        github: "https://github.com/Life1sOk/portfolio",
        website: "https://life1sok.github.io/portfolio/",
      },
    },
  ];

  const smallProjects = [
    {
      title: `${t("projects.small.project1.title")}`,
      description: `${t("projects.small.project1.description")}`,
      links: {
        github: "https://github.com/Life1sOk/small-projects",
        website: "https://life1sok.github.io/small-projects/",
      },
      tools: ["React", "TypeScript", "Sass"],
    },
    {
      title: `${t("projects.small.project2.title")}`,
      description: `${t("projects.small.project2.description")}`,
      links: {
        github: "https://github.com/Life1sOk/test-unistory",
        website: "https://life1sok.github.io/test-unistory/",
      },
      tools: ["React", "TypeScript", "RTKQuery", "useDapp"],
    },
    {
      title: `${t("projects.small.project3.title")}`,
      description: `${t("projects.small.project3.description")}`,
      links: {
        github: "https://github.com/Life1sOk/quote-generator",
        //   website: "",
      },
      tools: ["React", "TypeScript", "Sass"],
    },
    {
      title: `${t("projects.small.project4.title")}`,
      description: `${t("projects.small.project4.description")}`,
      links: {
        github: "https://github.com/Life1sOk/robo-friends",
        //   website: "",
      },
      tools: ["React", "TypeScript", "Styled com."],
    },
    {
      title: `${t("projects.small.project5.title")}`,
      description: `${t("projects.small.project5.description")}`,
      links: {
        github: "https://github.com/Life1sOk/background-generator",
        //   website: "",
      },
      tools: ["React", "TypeScript", "Styled com."],
    },
  ];

  return {
    big: projects,
    small: smallProjects,
  };
};
