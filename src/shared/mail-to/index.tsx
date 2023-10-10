import { MailLink } from "./index.style";

interface IComponent {
  email: string;
  children: React.ReactNode;
}

const Mailto = ({ email, children }: IComponent) => {
  return <MailLink href={`mailto:${email}`}>{children}</MailLink>;
};

export default Mailto;
