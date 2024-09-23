import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import HomePortfolio from "./HomePortfolio";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import useDeviceInfo from "@/hooks/useDeviceInfo";
import useAnimationSmoothNavbar from "@/hooks/useAnimationSmoothNavbar";

const Main = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const {
    activeAnimation,
    navbarScrolling,
    handleClick,
    homeSectionRef,
    projectsSectionRef,
    skillsSectionRef,
    contactSectionRef,
  } = useAnimationSmoothNavbar();

  const { isMobile } = useDeviceInfo();

  // Apply hover effect to the entire app
  return(
    <main className={"main"}>
    <motion.div
      className={"mask"}
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    >

    </motion.div>

    {isMobile ? (
          <NavbarMobile
            activeAnimation={activeAnimation}
            navbarScrolling={navbarScrolling}
            handleClick={handleClick}
          />
        ) : (
          <Navbar
            activeAnimation={activeAnimation}
            navbarScrolling={navbarScrolling}
            handleClick={handleClick}
          />
        )}

        <HomePortfolio isHovered={isHovered} setIsHovered={setIsHovered} homeSectionRef={homeSectionRef} />
        <Projects projectsSectionRef={projectsSectionRef} />
        <Skills skillsSectionRef={skillsSectionRef} />
        <Contact contactSectionRef={contactSectionRef} />
  </main>
  )
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        {isMobile ? (
          <NavbarMobile
            activeAnimation={activeAnimation}
            navbarScrolling={navbarScrolling}
            handleClick={handleClick}
          />
        ) : (
          <Navbar
            activeAnimation={activeAnimation}
            navbarScrolling={navbarScrolling}
            handleClick={handleClick}
          />
        )}

        <HomePortfolio homeSectionRef={homeSectionRef} />
        <Projects projectsSectionRef={projectsSectionRef} />
        <Skills skillsSectionRef={skillsSectionRef} />
        <Contact contactSectionRef={contactSectionRef} />
      </motion.div>
    </div>
  );
};

export default Main;
