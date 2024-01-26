import { Sections } from "@/enums/global";
import { useEffect, useRef, useState } from "react";
import ButtonNavbar from "../ui/buttonNavbar";
import { scrollToSection } from "@/utils/functions/scrollToSection";

interface IProps {
  navbarScrolling: boolean;
  activeAnimation?: string;
  handleClick: (animation: string) => void;
}
const navbarMobile = ({ activeAnimation, handleClick }: IProps) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  function openNavbar() {
    setShowNavbar((prev) => !prev);
  }
  return (
    <header className="headerMobile">
      <div
        onClick={openNavbar}
        className={`toggle ${showNavbar ? "active" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`navMobile ${showNavbar ? "" : "navbarActive"}`}>
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

export default navbarMobile;
