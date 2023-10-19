import React from "react";

import { ToolsStyle } from "./index.style";

interface IComponent {
  tools: string[];
}

const Tools = ({ tools }: IComponent) => {
  return (
    <ToolsStyle>
      {tools.map((tool, index) => (
        <li key={index}>{tool}</li>
      ))}
    </ToolsStyle>
  );
};

export default Tools;
