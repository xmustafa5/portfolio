
import Image from "next/image";



import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
 const ProjectContainerView = ({ image, title, documenting, href , projectsSectionRef }: any) => {
  const ref = useRef<null>(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation()
  const SlideControls = useAnimation()
  useEffect(() => {
    if(isInView){
      mainControls.start('visible')
      SlideControls.start('visible')
    }
  }, [isInView]);
  return (
    <div ref={ref} className="pb-6 relative overflow-hidden">
      
    <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5 , delay:0.25 }}
            className="projectContainer"
            >
          
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

    
        </motion.div> 
        <motion.div
          variants={{
            hidden: {left:"0"},
            visible: {left: '100%'}
          }}
          initial='hidden'
          animate={SlideControls}
          transition={{duration:0.5,ease: "easeIn", delay:0.177}}
          className="   mb-6  projectSlideContainerAnimation" 
          >
            </motion.div>
      </div>
  )
}
export default ProjectContainerView
