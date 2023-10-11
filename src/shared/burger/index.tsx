import { StyledBurger } from "./index.style";

interface IComponent {
  actionHandler: (data: boolean) => void;
  isOpen: boolean;
}

const Burger = ({ actionHandler, isOpen }: IComponent) => {
  return (
    <StyledBurger
      $open={isOpen}
      className="burger"
      onClick={() => actionHandler(!isOpen)}
      title="burger"
    >
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
    </StyledBurger>
  );
};

export default Burger;
