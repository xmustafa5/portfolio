interface IProps {
  activeAnimation?: string;
  handleClick: (animation: string) => void;
  scrollToSection: (section: string) => void;
  animation: string;
  sections: string;
  title: string;
}

const ButtonNavbar = ({
  handleClick,
  scrollToSection,
  activeAnimation,
  animation,
  sections,
  title,
}: IProps) => {
  return (
    <button
      onClick={() => {
        handleClick(animation);
        scrollToSection(sections);
      }}
      className={`animation  ${activeAnimation === animation ? animation : ""}`}
    >
      {title}
    </button>
  );
};
export default ButtonNavbar;
