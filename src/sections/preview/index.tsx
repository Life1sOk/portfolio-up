import { forwardRef } from "react";

import WelcomePrev from "@components/containers/welcome";
import Slides from "@components/containers/slides-animation";

import { MainContainer, Animation } from "./index.style";

const PreviewSub = forwardRef<HTMLElement>(function Preview(_, ref) {
  return (
    <MainContainer ref={ref}>
      <WelcomePrev />
      <Animation>
        <Slides />
      </Animation>
    </MainContainer>
  );
});

export default PreviewSub;
