import { useEffect, useRef, useState } from "react";

function useAnimationSmoothNavbar() {
    const [navbarScrolling, setNavbarScrolling] = useState(false);
    const [activeAnimation, setActiveAnimation] = useState("");
    const homeSectionRef = useRef<any>(null);
    const projectsSectionRef = useRef<any>(null);
    const skillsSectionRef = useRef<any>(null);
    const contactSectionRef = useRef<any>(null);

    const handleClick = (animation: string) => {
        setActiveAnimation(animation);
    };

    // Inside the useEffect in Main.js
useEffect(() => {
    function changeBackground() {
      if (window.scrollY >= 80) {
        setNavbarScrolling(true);
      } else {
        setNavbarScrolling(false);
      }
    }
  
    const observeSection = (observer:any, sectionRef:any) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };
  
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
  
    window.addEventListener('scroll', changeBackground);
    observeSection(homeObserver, homeSectionRef);
    observeSection(projectsObserver, projectsSectionRef);
    observeSection(skillsObserver, skillsSectionRef);
    observeSection(contactObserver, contactSectionRef);
  
    return () => {
      window.removeEventListener('scroll', changeBackground);
      homeObserver.disconnect();
      projectsObserver.disconnect();
      skillsObserver.disconnect();
      contactObserver.disconnect();
    };
  }, [homeSectionRef, projectsSectionRef, skillsSectionRef, contactSectionRef]);
  
    return {
        activeAnimation,
        navbarScrolling,
        handleClick,
        homeSectionRef,
        projectsSectionRef,
        skillsSectionRef,
        contactSectionRef
    }
}
export default useAnimationSmoothNavbar;