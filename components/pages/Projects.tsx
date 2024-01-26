import { Sections } from "@/enums/global";
import TitleSection from "../ui/TitleSection";
import bill from "@/assets/images/bill/billEmptyNoOpacity.png";
import { projects } from "@/data/projects";
import { Project } from "@/types/skillsIcons";
import Image from "next/image";
import ProjectContainerView from "../ui/projects/ProjectContainerView";
interface IProps {
  projectsSectionRef?: React.RefObject<HTMLDivElement>;
}

const Projects = ({ projectsSectionRef }: IProps) => {

  return (
    <section
      id={Sections.PROJECTS_SECTION}
      className="projects "
      ref={projectsSectionRef}
    >
      <div className="billProjects">
        <Image src={bill} alt="bill" className="billProjectsEmpty" />
      </div>
      <TitleSection title="My Projects" />
      {projects.map((project: Project) => (
        <ProjectContainerView
          image={
            project.image.EyeClinic ||
            project.image.audioGuide ||
            project.image.zaoStore
          }
          title={project.title}
          href={project.href}
          documenting={project.documenting}
          id={project.id}
        />
      ))}
    </section>
  );
};
export default Projects;
