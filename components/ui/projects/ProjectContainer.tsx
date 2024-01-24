import Image from "next/image";
import zaoStore from "@/assets/images/projects/AudioGuide.png";
const ProjectContainer = ({ image, title, documenting, href }: any) => {
  return (
    <div className="pb-6">
    <div className="projectContainer ">
        <div className="rightProject">
          <div className="imageProjectContainer">
            <Image src={image} alt="project Image" className="imageProject" />
          </div>
        </div>
        <div className="leftContainer">
          <div className="leftProjectContainer ">
            <h1>{title}</h1>
            <p>{documenting}</p>
            <div className="containerButtonProject">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="downloadCvButton"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default ProjectContainer;
