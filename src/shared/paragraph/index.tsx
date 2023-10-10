import React from "react";

import { ParagraphStyle } from "./index.style";

interface IComponent {
  title: string;
}

const Paragraph = ({ title }: IComponent) => {
  return <ParagraphStyle>{title}</ParagraphStyle>;
};

export default Paragraph;
