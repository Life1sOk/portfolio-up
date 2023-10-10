import { SpaceStyle } from "./index.style";

interface IComponent {
  title: string;
  desc: React.ReactNode;
}

const Space = ({ title, desc }: IComponent) => {
  return (
    <SpaceStyle>
      <span>{title}</span>
      {desc}
    </SpaceStyle>
  );
};

export default Space;
