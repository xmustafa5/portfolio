import { Sections } from "@/enums/global";
import SkillWithTitle from "../ui/skills/SkillWithTitle";
import TitleSection from "../ui/TitleSection";
import Image from "next/image";
import skillImage from "@/assets/images/skills/skill.png";
import TinySkills from "../ui/skills/TinySkills";
import { skillsIcons } from "@/data/skills";
import { SkillIcon } from "@/types/skillsIcons";

interface IProps {
  skillsSectionRef?: React.RefObject<HTMLDivElement>;
}

const Skills = ({ skillsSectionRef }: IProps) => {
  return (
    <div id={Sections.SKILLS_SECTION} className="Skills" ref={skillsSectionRef}>
      <TitleSection title="My Skills" />
      {skillsIcons?.map((skill: SkillIcon) => (
        <SkillWithTitle
          id={skill?.id}
          title={skill?.title}
          icon={skill?.icon}
        />
      ))}
      <div className="contentSkills">
        <div className="ImageContainerSkills">
          <Image src={skillImage} alt="image skills" className="imageSkills" />
        </div>
        <div className="containerContentSkills">
          <TinySkills
            title="Cross-functional Collaboration"
            content="Proficient in HTML, CSS, and JavaScript, specializing in React, Vue, Next.js, and Nuxt.js. Excels in cross-functional collaboration with designers and backend developers to deliver polished user interfaces."
          />
          <TinySkills
            title="User-Centric Problem Solver"
            content="Proficient in TypeScript for robust code and Tailwind CSS for streamlined styling. Experienced in global state management with Redux, I excel in creative problem-solving for enhanced user experiences."
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
