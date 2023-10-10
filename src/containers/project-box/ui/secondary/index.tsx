import React from "react";

import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import IconSocial from "@components/shared/icon-social";
import Tools from "@components/shared/tools";

import {
  SmallBoxStyle,
  BoxTop,
  FolderIcon,
  LinksMain,
  Title,
  Description,
} from "./index.style";

const Scondary = ({ data }: { data: any }) => {
  const { title, description, links, tools } = data;

  return (
    <SmallBoxStyle>
      <BoxTop>
        <FolderIcon>
          <AiOutlineFolder />
        </FolderIcon>
        <LinksMain>
          <IconSocial
            icon={<FiGithub />}
            url={links.github}
            size="small"
            type="white"
            sm={`${title} - github`}
          />
          {links.website && (
            <IconSocial
              icon={<FiExternalLink />}
              url={links.website}
              size="small"
              type="white"
              sm={`${title} - link`}
            />
          )}
        </LinksMain>
      </BoxTop>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tools tools={tools} size="small" />
    </SmallBoxStyle>
  );
};

export default Scondary;
