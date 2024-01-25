import { Sections } from "@/enums/global";
import audioGuide from "@/assets/images/projects/AudioGuide.png";
import zaoStore from "@/assets/images/projects/zaoStore.png";
import EyeClinic from "@/assets/images/projects/EyeClinic.png";
import ProjectContainerView from "../ui/projects/ProjectContainerView";
import TitleSection from "../ui/TitleSection";
import  bill  from "@/assets/images/bill/billEmptyNoOpacity.png";
import  billWithNoise  from "@/assets/images/bill/billWithNoise.png";
import Image from "next/image";
const Projects = ({ projectsSectionRef }: any) => {
  return (
    <section
      id={Sections.PROJECTS_SECTION}
      className="projects "
      ref={projectsSectionRef}
    >
      <div className="billProjects">
        <Image src={bill} alt='bill' className='billProjectsEmpty' />
      </div>
      
      <TitleSection title="My Projects" />
      <ProjectContainerView
        image={EyeClinic}
        title="Eye Clinic"
        href="https://eye-clinic-77ea0.firebaseapp.com"
        documenting="I completed a web application for an eye clinic as the final project for the 'Masart' course sponsored by the United States Unity (USAID). Developed using React and Tailwind, the frontend offers a modern and responsive user interface. Firebase API was integrated for secure data management, allowing real-time updates. This project reflects my proficiency in web development and practical application of skills gained from the 'Masart' course."
      />
        <div className="billProjectsWithNoiseContainer">
      <ProjectContainerView
        image={zaoStore}
        title="Zao Store"
        href='https://zao-store-e7fe8.web.app/'
        documenting=" Freelance project: Crafted a dynamic social media store to meet the specific needs of the client, incorporating unique custom features. Implemented real API integration for efficient communication with the backend, enhancing the user experience. The solution not only reflects my adaptability to custom requirements but also showcases a commitment to delivering a tailored and high-quality product."
      />
      <ProjectContainerView
        image={audioGuide}
        title="Audio Guide"
        href='https://xmustafa5.github.io/endd/'
        documenting="Graduation project from the University of Technology: Designed an innovative audio guide exclusively using vanilla JavaScript. This project, focused on guiding visitors through the Computer Science department, exemplifies my proficiency in creating efficient solutions without external APIs. The audio guide provides a seamless and user-friendly experience, demonstrating my dedication to delivering practical applications in the field of technology."
      />
      <div className="billProjectsWithNoise">
        <Image src={billWithNoise} alt='bill' className='billProjectWithNoise' />
      </div>
      </div>
    </section>
  );
};
export default Projects;
