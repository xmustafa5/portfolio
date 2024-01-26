

const ButtonNavbar =({handleClick,scrollToSection,activeAnimation,animation,sections,title}:any)=>{
    return(
   
        <button
        onClick={() => {
          handleClick(animation);
          scrollToSection(sections);
        }}
        className={`animation  ${
          activeAnimation === animation ? animation : ""
        }`}
      >
        {title}
      </button>
    )
}
export default ButtonNavbar;