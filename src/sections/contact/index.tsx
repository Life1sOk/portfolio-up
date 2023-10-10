import { forwardRef } from "react";

import ContactMe from "@components/containers/contact-me";
import Copyright from "@components/shared/copyright";

import { ContactStyle, Info } from "./index.style";

const ContactSub = forwardRef<HTMLElement>(function Contacts(_, ref) {
  return (
    <ContactStyle ref={ref}>
      <ContactMe />
      <Info>
        <Copyright />
      </Info>
    </ContactStyle>
  );
});

export default ContactSub;
