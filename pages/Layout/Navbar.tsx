import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [navbarScrolling, setNavbarScrolling] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState('');
  const homeSectionRef = useRef<any>(null); // Ref for Home section
  const projectsSectionRef = useRef<any>(null);

  const handleClick = (animation:string) => {
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
          setActiveAnimation('animation2'); // Set to 'animation2' when "Projects" section is in viewport
        }
      });
    }, {
      threshold: 0.5,
    });

    window.addEventListener("scroll", changeBackground);
    homeObserver.observe(homeSectionRef.current);
    projectsObserver.observe(projectsSectionRef.current);

    return () => {
      window.removeEventListener("scroll", changeBackground);
      homeObserver.disconnect();
      projectsObserver.disconnect();
    };
  }, []);

  return (
    <header className={`h-full ${navbarScrolling ? "navbarOnScrolling" : ""}`}>
      <nav className="nav fixed">
        <button onClick={() => handleClick('animation1') } className={`animation ${activeAnimation === "animation1"? "animation1": ""}`} >Home</button>
        <button onClick={() => handleClick('animation2') } className={`animation ${activeAnimation === "animation2"? "animation2": ""}`}>Projects</button>
        <button onClick={() => handleClick('animation3')} className={`animation ${activeAnimation === "animation3"? "animation3": ""}`}>Skills</button>
        <button onClick={() => handleClick('animation4')} className={`animation ${activeAnimation === "animation4"? "animation4": ""}`}>Contact</button>
      </nav>
      <div className="bg-yellow-400 h-screen" ref={homeSectionRef}>
        Home
      </div>
      <div className="bg-red-700 h-screen" ref={projectsSectionRef}>
        Projects
      </div>
    </header>
  );
};

export default Navbar;
