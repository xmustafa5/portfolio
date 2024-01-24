// Main.js
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import HomePortfolio from "./HomePortfolio";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from './Contact';

const Main = () => {
  const [navbarScrolling, setNavbarScrolling] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState('');
  const homeSectionRef = useRef<any>(null);
  const projectsSectionRef = useRef<any>(null);
  const skillsSectionRef = useRef<any>(null);
  const contactSectionRef = useRef<any>(null);

  const handleClick = (animation: string) => {
    setActiveAnimation(animation);
  };

  useEffect(() => {
    function changeBackground() {
      if (window.scrollY >= 80) {
        setNavbarScrolling(true);
      } else {
        setNavbarScrolling(false);
      }
    }

    const homeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveAnimation('animation1');
        }
      });
    }, {
      threshold: 0.5,
    });

    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveAnimation('animation2');
        }
      });
    }, {
      threshold: 0.5,
    });

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveAnimation('animation3');
        }
      });
    }, {
      threshold: 0.5,
    });

    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveAnimation('animation4');
        }
      });
    }, {
      threshold: 0.5,
    });

    window.addEventListener("scroll", changeBackground);
    homeObserver.observe(homeSectionRef.current);
    projectsObserver.observe(projectsSectionRef.current);
    skillsObserver.observe(skillsSectionRef.current);
    contactObserver.observe(contactSectionRef.current);

    return () => {
      window.removeEventListener("scroll", changeBackground);
      homeObserver.disconnect();
      projectsObserver.disconnect();
      skillsObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <div>
      <Navbar activeAnimation={activeAnimation} navbarScrolling={navbarScrolling} handleClick={handleClick} />
      <HomePortfolio homeSectionRef={homeSectionRef} />
      <Projects projectsSectionRef={projectsSectionRef} />
      <Skills skillsSectionRef={skillsSectionRef} />
      <Contact contactSectionRef={contactSectionRef} />
    </div>
  );
};

export default Main;
