import { useEffect, Fragment } from "react";

import { AsideModalStyle, BlackBox } from "./index.style";

interface IComponent {
  isOpen: boolean;
  openHandler: () => void;
  children: React.ReactNode;
}

const AsideModal = ({ isOpen, openHandler, children }: IComponent) => {
  // Prevent scroll content when aside menu is open
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  return (
    <Fragment>
      <AsideModalStyle $status={isOpen}>{children}</AsideModalStyle>
      {isOpen ? <BlackBox onClick={openHandler} /> : null}
    </Fragment>
  );
};

export default AsideModal;
