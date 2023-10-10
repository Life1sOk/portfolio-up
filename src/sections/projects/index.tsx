import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import { useProjectStore } from "./conts";

import { MainProject, ScondaryProject } from "@components/containers/project-box";
import Title from "@components/shared/title";

import {
  ProjectsContainer,
  ProjectsStyle,
  SmallWrapper,
  TitleSmall,
  SmallStyle,
} from "./index.style";

const ProjectsSub = forwardRef<HTMLElement>(function Projects(_, ref) {
  const { t } = useTranslation();

  const projects = useProjectStore();

  return (
    <ProjectsContainer ref={ref}>
      <Title number={3} title={t("projects.title")} procent={70} />
      <ProjectsStyle>
        {projects.big.map((project, index) => (
          <MainProject key={index} data={project} />
        ))}
      </ProjectsStyle>
      <SmallWrapper>
        <TitleSmall>{t("projects.titleSmall")}:</TitleSmall>
        <SmallStyle>
          {projects.small.map((project, index) => (
            <ScondaryProject key={index} data={project} />
          ))}
        </SmallStyle>
      </SmallWrapper>
    </ProjectsContainer>
  );
});

export default ProjectsSub;
