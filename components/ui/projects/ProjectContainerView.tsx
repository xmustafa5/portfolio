import Image from "next/image";
import { motion } from "framer-motion";
import useTargetAnimationOnScrolling from "@/hooks/useTargetAnimationOnScrolling";
interface IProps {
  image:any,
  title:string,
  documenting:string,
  href:string,
  id:number,
}
const ProjectContainerView = ({
  image,
  title,
  documenting,
  href,
  id,
}: IProps) => {
  const { ref,mainControls,SlideControls} = useTargetAnimationOnScrolling()

  return (
    <div className="pb-6 relative overflow-hidden">
      <motion.div
        key={id}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5 }}
        className="projectContainer"
      >
        <div ref={ref} className="rightProject">
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
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: "0" },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={SlideControls}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.177 }}
        className="mb-6  projectSlideContainerAnimation"
      ></motion.div>
    </div>
  );
};
export default ProjectContainerView;
