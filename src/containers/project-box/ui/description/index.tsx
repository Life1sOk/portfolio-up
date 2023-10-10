import { useTranslation } from "next-i18next";

import { socialIcons } from "./consts";

import Paragraph from "@components/shared/paragraph";
import IconSocial from "@components/shared/icon-social";
import Tools from "@components/shared/tools";
import Space from "@components/shared/space";

import StatusProject from "./status";

import type { IStatus, IPosition } from "../..";

import { DescriptionUiStyle, Main, Links, InfoWrapper, Title } from "./index.style";

interface IComponent {
  title: string;
  description: string;
  tools: string[];
  links: {
    github: string;
    website?: string;
  };
  status: IStatus;
  position: IPosition;
}

const DescriptionUi = (props: IComponent) => {
  const { title, description, tools, links, status, position } = props;

  const { t } = useTranslation();

  return (
    <DescriptionUiStyle>
      <Title>{title}</Title>
      <InfoWrapper>
        <Space title={t("others.status.title")} desc={<StatusProject data={status} />} />
        <Space title={t("others.status.position")} desc={<span>{position}</span>} />
      </InfoWrapper>
      <Main>
        <Paragraph title={description} />
      </Main>
      <Tools tools={tools} />
      <Links>
        <IconSocial
          icon={socialIcons.github}
          url={links.github}
          size="small"
          sm={`${title} - github`}
        />
        {links.website && (
          <IconSocial
            icon={socialIcons.view}
            url={links.website}
            size="small"
            sm={`${title} - link`}
          />
        )}
      </Links>
    </DescriptionUiStyle>
  );
};

export default DescriptionUi;
