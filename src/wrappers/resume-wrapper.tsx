interface IComponent {
  lang: string;
  children: React.ReactNode;
}

const ResumeWrapper = ({ lang, children }: IComponent) => {
  return (
    <a
      href={lang === "ru" ? "/resume/resume-ru.pdf" : "/resume/resume-eng.pdf"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ResumeWrapper;
