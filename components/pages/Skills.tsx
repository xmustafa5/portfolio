import { Sections } from "@/enums/global";

const Skills = ({ skillsSectionRef }: any) => {
  return (
    <div
      id={Sections.SKILLS_SECTION}
      className="h-screen bg-red-400"
      ref={skillsSectionRef}
    >
      Skills
    </div>
  );
};

export default Skills;
