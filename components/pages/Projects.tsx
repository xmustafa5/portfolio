import { Sections } from "@/enums/global";
import ProjectContainer from "../ui/projects/ProjectContainer";
import audioGuide from '@/assets/images/projects/AudioGuide.png'
import zaoStore from '@/assets/images/projects/zaoStore.png'
import EyeClinic from '@/assets/images/projects/EyeClinic.png'
const Projects = ({ projectsSectionRef }: any) => {
  return (
    <section
      id={Sections.PROJECTS_SECTION}
      className="projects  "
      ref={projectsSectionRef}
    >
      <ProjectContainer image={EyeClinic} />
      <ProjectContainer image={zaoStore} />
      <ProjectContainer image={audioGuide}/>
    </section>
  );
};
export default Projects;
