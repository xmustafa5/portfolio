import { useEffect, useRef, useState } from "react";

const Navbars = () => {
 

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

export default Navbars;
