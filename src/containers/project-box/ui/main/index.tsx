import ImageUi from "../image";
import DescriptionUi from "../description";

import type { IMainProject } from "../..";

import { ProjectBoxStyle } from "./index.style";

interface IComponent {
  data: IMainProject;
}

const Main = ({ data }: IComponent) => {
  const { title, image, description, tools, links, status, position } = data;

  return (
    <ProjectBoxStyle>
      <ImageUi screen={image.screen} title={title} isFront={true} />
      <DescriptionUi
        title={title}
        status={status}
        position={position}
        description={description}
        tools={tools}
        links={links}
      />
    </ProjectBoxStyle>
  );
};

export default Main;
