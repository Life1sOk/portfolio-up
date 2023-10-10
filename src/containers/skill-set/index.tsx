import { tierFront, tierBack } from "./consts";

import Icon from "./ui/icon-wrap";

import { SkillSetWrapper, SkillSetStyle } from "./index.style";

const SkillSet = () => {
  return (
    <SkillSetWrapper>
      <SkillSetStyle>
        {tierFront.map((tool, index) => (
          <Icon name={tool.name} icon={tool.icon} key={index} />
        ))}
      </SkillSetStyle>
      <SkillSetStyle>
        {tierBack.map((tool, index) => (
          <Icon name={tool.name} icon={tool.icon} key={index} />
        ))}
      </SkillSetStyle>
    </SkillSetWrapper>
  );
};

export default SkillSet;
