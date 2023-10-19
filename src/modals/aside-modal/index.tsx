import { useEffect, Fragment } from "react";

import { ModalWrapper, AsideModalStyle, BlackBox } from "./index.style";

interface IComponent {
  isOpen: boolean;
  openHandler: (data: boolean) => void;
  children: React.ReactNode;
}

const AsideModal = ({ isOpen, openHandler, children }: IComponent) => {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  return (
    <ModalWrapper>
      <AsideModalStyle $status={isOpen}>{children}</AsideModalStyle>
      {isOpen ? <BlackBox onClick={() => openHandler(false)} /> : null}
    </ModalWrapper>
  );
};

export default AsideModal;
