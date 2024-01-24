


const Navbar =({navbarScrolling,activeAnimation,handleClick}:any)=>{
    const scrollToSection = (sectionId:any)=>{
        const targetSection  = document.getElementById(sectionId)
        if(targetSection){
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }   
    return(
        <header className={`h-full ${navbarScrolling ? "navbarOnScrolling" : ""}`}>
      <nav className="nav fixed">
      <button onClick={() => { handleClick('animation1'); scrollToSection('homeSection'); }} className={`animation ${activeAnimation === 'animation1' ? 'animation1' : ''}`} >Home</button>
      <button onClick={() => { handleClick('animation2'); scrollToSection('projectsSection'); }} className={`animation ${activeAnimation === 'animation2' ? 'animation2' : ''}`}>Projects</button>
        <button onClick={() => handleClick('animation3')} className={`animation ${activeAnimation === "animation3"? "animation3": ""}`}>Skills</button>
        <button onClick={() => handleClick('animation4')} className={`animation ${activeAnimation === "animation4"? "animation4": ""}`}>Contact</button>
      </nav>
     
    </header>
    )
}
export default Navbar