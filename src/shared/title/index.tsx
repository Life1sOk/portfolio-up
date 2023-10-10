import { TitleStyle, TitleNumber } from "./index.style";

interface IComponent {
  number: number;
  title: string;
  procent?: number;
}

const Title = ({ title, number, procent }: IComponent) => {
  return (
    <TitleStyle procent={procent}>
      <TitleNumber>{`0${number}.`}</TitleNumber>
      {title}
    </TitleStyle>
  );
};

export default Title;
