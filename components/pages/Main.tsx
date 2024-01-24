import Navbar from "./Navbar";
import useAnimationSmoothNavbar from "@/hooks/useAnimationSmoothNavbar";
import dynamic from "next/dynamic";
const HomePortfolio = dynamic(() => import("./HomePortfolio"));
const Projects = dynamic(() => import("./Projects"));
const Skills = dynamic(() => import("./Skills"));
const Contact = dynamic(() => import("./Contact"));
  
const Main = () => {
  const {
    activeAnimation,
    navbarScrolling,
    handleClick,
    homeSectionRef,
    projectsSectionRef,
    skillsSectionRef,
    contactSectionRef,
  } = useAnimationSmoothNavbar();

  return (
    <div>
      <Navbar
        activeAnimation={activeAnimation}
        navbarScrolling={navbarScrolling}
        handleClick={handleClick}
      />
      <HomePortfolio homeSectionRef={homeSectionRef} />
      <Projects projectsSectionRef={projectsSectionRef} />
      <Skills skillsSectionRef={skillsSectionRef} />
      <Contact contactSectionRef={contactSectionRef} />
    </div>
  );
};

export default Main;
