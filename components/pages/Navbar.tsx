import { Sections } from "@/enums/global";
import ButtonNavbar from "../ui/buttonNavbar";

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
        <ButtonNavbar
          handleClick={handleClick}
          scrollToSection={scrollToSection}
          sections={Sections.HOME_SECTION}
          animation="animation1"
          title="Home"
          activeAnimation={activeAnimation}
        />
        <ButtonNavbar
          handleClick={handleClick}
          scrollToSection={scrollToSection}
          sections={Sections.PROJECTS_SECTION}
          animation="animation2"
          title="Projects"
          activeAnimation={activeAnimation}
        />
        <ButtonNavbar
          handleClick={handleClick}
          scrollToSection={scrollToSection}
          sections={Sections.SKILLS_SECTION}
          animation="animation3"
          title="Skills"
          activeAnimation={activeAnimation}
        />
        <ButtonNavbar
          handleClick={handleClick}
          scrollToSection={scrollToSection}
          sections={Sections.CONTACT_SECTION}
          animation="animation4"
          title="Contact"
          activeAnimation={activeAnimation}
        />

      </nav>
    </header>
  );
};
export default Navbar;
