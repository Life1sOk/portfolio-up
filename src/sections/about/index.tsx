import { forwardRef } from "react";

import Image from "next/image";

import AboutMeContainer from "@components/containers/about-me";

import { MainAbout, FotoWrapper } from "./index.style";

const AboutSub = forwardRef<HTMLElement>(function About(_, ref) {
  return (
    <MainAbout ref={ref}>
      <AboutMeContainer />
      <FotoWrapper>
        <Image alt="My foto" src="/images/photo.webp" fill={true} />
      </FotoWrapper>
    </MainAbout>
  );
});

export default AboutSub;
