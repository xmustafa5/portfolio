import { Sections } from "@/enums/global";
import SkillWithTitle from "../ui/skills/SkillWithTitle";
import TitleSection from "../ui/TitleSection";
import html from "@/assets/images/icons/skills/html.png";
import css from "@/assets/images/icons/skills/css.png";
import javascript from "@/assets/images/icons/skills/javascript.png";
import typescript from "@/assets/images/icons/skills/typescript.png";
import React from "@/assets/images/icons/skills/React.png";
import vue from "@/assets/images/icons/skills/vue.png";
import next from "@/assets/images/icons/skills/next-js.png";
import tailwind from "@/assets/images/icons/skills/tailwind.png";
import nuxt from "@/assets/images/icons/skills/nuxt-js.png";
import redux from "@/assets/images/icons/skills/redux.png";
import Image from "next/image";
import ssss from "@/assets/images/skills/skill.png";
import TinySkills from "../ui/skills/TinySkills";
import Contact from "./Contact";
import { skillsIcons } from "@/utils/data/skills";
 
const Skills = ({ skillsSectionRef }: any) => {
  return (
    <div id={Sections.SKILLS_SECTION} className="Skills" ref={skillsSectionRef}>
      <TitleSection title="My Skills" />
      {skillsIcons?.map((skill:SkillsIcons) => (
       <SkillWithTitle id={skill?.id} title={skill?.title} icon={skill?.icon} />
))}
      {/* <SkillWithTitle title="Html" icon={html} />
      <SkillWithTitle title="Vue" icon={vue} />
      <SkillWithTitle title="CSS" icon={css} />
      <SkillWithTitle title="Javascript" icon={javascript} />
      <SkillWithTitle title="Typescript" icon={typescript} />
      <SkillWithTitle title="React" icon={React} />
      <SkillWithTitle title="Next" icon={next} />
      <SkillWithTitle title="Nuxt" icon={nuxt} />
      <SkillWithTitle title="tailwind" icon={tailwind} />
      <SkillWithTitle title="Redux" icon={redux} /> */}
      <div className="contentSkills">
        <div className="ImageContainerSkills">
          <Image src={ssss} alt="image skills" className="imageSkills" />
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
