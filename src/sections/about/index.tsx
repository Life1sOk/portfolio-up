import { forwardRef } from "react";

import Image from "next/image";

import AboutMeContainer from "@components/containers/about-me";

import { MainAbout, FotoWrapper } from "./index.style";

const AboutSub = forwardRef<HTMLElement>(function About(_, ref) {
  return (
    <MainAbout ref={ref}>
      <AboutMeContainer />
      <FotoWrapper>
        <Image
          alt="My personal photo"
          src="/images/photo.webp"
          fill
          quality={100}
          priority
        />
      </FotoWrapper>
    </MainAbout>
  );
});

export default AboutSub;
