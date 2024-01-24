import  Image from 'next/image';
import zaoStore from '@/assets/images/projects/AudioGuide.png'
const ProjectContainer = ({image}:any) => {
    return (
      <div className="projectContainer">
        <div className="rightProject">
            <div className='imageProjectContainer'>

            <Image src={image} alt='project Image' className='imageProject'/>
            </div>
        </div>
        <div className="leftContainer">
            <h1>Eye Clinc</h1>
            <p>Developed a web application for an eye clinic as the final project for the ""masart provided by the Unite States Unity (USAID)" course</p>
            <div className="containerButtonProject">
                <button className="downloadCvButton">view More</button>
            </div>
        </div>
      </div>
    );
  };
  
  export default ProjectContainer;