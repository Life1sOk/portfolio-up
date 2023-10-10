import { locationBasics, socialMedia } from "../../utils/social-media";

import Mailto from "@components/shared/mail-to";
import IconSocial from "@components/shared/icon-social";

import { SocialContacts, EmailLink, StartLine, Email } from "./index.style";

const FrontContacts = () => {
  return (
    <>
      <SocialContacts>
        {socialMedia.map((social, index) => (
          <IconSocial key={index} icon={social.icon} url={social.url} sm={social.sm} />
        ))}
        <StartLine />
      </SocialContacts>
      <EmailLink>
        <Mailto email={locationBasics.email}>
          <Email title="My email">andreytsoy.webdev@gmail.com</Email>
        </Mailto>
        <StartLine />
      </EmailLink>
    </>
  );
};

export default FrontContacts;
