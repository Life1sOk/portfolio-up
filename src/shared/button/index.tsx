import React from "react";

import { ButtonWrapper, ButtonStyle } from "./index.style";

interface IComponent {
  label: string;
  actionHandler?: () => void;
}

const Button = ({ label, actionHandler }: IComponent) => {
  return (
    <ButtonWrapper onClick={actionHandler}>
      <ButtonStyle>{label}</ButtonStyle>
    </ButtonWrapper>
  );
};

export default Button;
