import { Fragment, useRef, useImperativeHandle, RefObject } from "react";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import NavigationSub from "@components/sections/navigation";
import PreviewSub from "@components/sections/preview";
import AboutSub from "@components/sections/about";
import SkillsSub from "@components/sections/skills";
import ExperienceSub from "@components/sections/experience";
import ProjectsSub from "@components/sections/projects";
import ContactSub from "@components/sections/contact";
import FrontContacts from "@components/containers/front-contacts";

import { HomeWrapper, HomeContainer } from "@components/styles/home.style";

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const homeRef: any = useRef(null);

  const previewRef: RefObject<HTMLElement> = useRef(null);
  const aboutRef: RefObject<HTMLElement> = useRef(null);
  const toolsRef: RefObject<HTMLElement> = useRef(null);
  const experienceRef: RefObject<HTMLElement> = useRef(null);
  const projectsRef: RefObject<HTMLElement> = useRef(null);
  const contactRef: RefObject<HTMLElement> = useRef(null);

  const scrollIntoViewHandler = (section: string) => {
    const setting: ScrollIntoViewOptions = {
      behavior: "smooth",
    };

    if (section === "Preview") previewRef.current?.scrollIntoView(setting);
    if (section === "About") aboutRef.current?.scrollIntoView(setting);
    if (section === "Tools") toolsRef.current?.scrollIntoView(setting);
    if (section === "Experience") experienceRef.current?.scrollIntoView(setting);
    if (section === "Projects") projectsRef.current?.scrollIntoView(setting);
    if (section === "Contacts") contactRef.current?.scrollIntoView(setting);
  };

  useImperativeHandle(
    homeRef,
    () => {
      return {
        scrollToSection(section: string) {
          scrollIntoViewHandler(section);
        },
      };
    },
    []
  );

  const handleScroll = (section: string) => homeRef.current.scrollToSection(section);

  return (
    <Fragment>
      <Head>
        <title>Portfolio - Andrey Tsoy</title>
        <meta name="description" content="Potfolio - web developer eng/ru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <HomeWrapper>
        <NavigationSub scrollHandler={handleScroll} />
        <HomeContainer>
          <PreviewSub ref={previewRef} />
          <AboutSub ref={aboutRef} />
          <SkillsSub ref={toolsRef} />
          <ProjectsSub ref={projectsRef} />
          <ExperienceSub ref={experienceRef} />
          <ContactSub ref={contactRef} />
          <FrontContacts />
        </HomeContainer>
      </HomeWrapper>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Home;
