import React, { useState, useEffect, useRef, RefObject } from "react";

import AsideModal from "@components/modals/aside-modal";
import Logo from "@components/shared/logo";
import Burger from "@components/shared/burger";
import { MobileNav, DesktopNav } from "@components/containers/navbar";

import {
  NavigationContainer,
  BurgerWrapper,
  NavWrapper,
  NavAsideWrapper,
  LogoWrapper,
} from "./index.style";

interface IComponent {
  scrollHandler: (data: string) => void;
}

const NavigationSub = ({ scrollHandler }: IComponent) => {
  const [open, setOpen] = useState(false);

  const navbarRef: RefObject<HTMLElement> = useRef(null);

  const openNavHandler = () => setOpen(!open);

  useEffect(() => {
    let prevScrollpos = window.scrollY;

    const handleScroll = () => {
      let currentScrollPos = window.scrollY;

      if (navbarRef.current) {
        if (prevScrollpos > currentScrollPos) {
          navbarRef.current.style.transform = "translateY(0)";
        }

        if (prevScrollpos < currentScrollPos && currentScrollPos > 20) {
          navbarRef.current.style.transform = "translateY(-100%)";
        }
      }

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationContainer ref={navbarRef}>
      <NavWrapper>
        <AsideModal isOpen={open} openHandler={openNavHandler}>
          <MobileNav scrollHandler={scrollHandler} openNavHandler={openNavHandler} />
        </AsideModal>
        <LogoWrapper onClick={() => scrollHandler("Preview")}>
          <Logo />
        </LogoWrapper>
        <BurgerWrapper>
          <Burger isOpen={open} actionHandler={openNavHandler} />
        </BurgerWrapper>
        <NavAsideWrapper>
          <DesktopNav scrollHandler={scrollHandler} />
        </NavAsideWrapper>
      </NavWrapper>
    </NavigationContainer>
  );
};

export default NavigationSub;
