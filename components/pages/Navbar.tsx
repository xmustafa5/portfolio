import { Sections } from "@/enums/global";

const Navbar = ({ navbarScrolling, activeAnimation, handleClick }: any) => {
  const scrollToSection = (sectionId: any) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
 

  return (
    <header className={`header ${navbarScrolling ? "navbarOnScrolling" : ""}`}>
      <nav className="nav">
        <button
          onClick={() => {
            handleClick("animation1");
            scrollToSection(Sections.HOME_SECTION);
          }}
          className={`animation  ${
            activeAnimation === "animation1" ? "animation1" : ""
          }`}
        >
          Home
        </button>
        <button
          onClick={() => {
            handleClick("animation2");
            scrollToSection(Sections.PROJECTS_SECTION);
          }}
          className={`animation ${
            activeAnimation === "animation2" ? "animation2" : ""
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => {
            handleClick("animation3");
            scrollToSection(Sections.SKILLS_SECTION);
          }}
          className={`animation ${
            activeAnimation === "animation3" ? "animation3" : ""
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => {
            handleClick("animation4");
            scrollToSection(Sections.CONTACT_SECTION);
          }}
          className={`animation ${
            activeAnimation === "animation4" ? "animation4" : ""
          }`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
