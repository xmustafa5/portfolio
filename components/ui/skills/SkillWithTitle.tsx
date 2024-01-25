import Image from "next/image"



 const SkillWithTitle = ({title,icon}:any) => {
  return (
    <div className="skillContainer">
      <div className="skilltest">
        <div className="iconSkill">
       <Image width={80} height={80} src={icon} alt="ed"/>
        </div>
        <div className={title === "Javascript" || title === "Typescript" ? "titleOfSkillsLong" : "titleOfSkills"}>
              <h2>{title}</h2>  
        </div>
      </div>
       </div>
  )
}
export default SkillWithTitle
