import React from "react";

import { ToolsStyle, OneTool } from "./index.style";

interface IComponent {
  tools: string[];
  size?: string;
}

const Tools = ({ tools, size }: IComponent) => {
  return (
    <ToolsStyle size={size}>
      {tools.map((tool, index) => (
        <OneTool key={index}>{tool}</OneTool>
      ))}
    </ToolsStyle>
  );
};

export default Tools;
