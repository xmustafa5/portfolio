import Image from "next/image";
import { motion  } from "framer-motion";
import useTargetAnimationOnScrolling from "@/hooks/useTargetAnimationOnScrolling";
interface IProps {
  icon:any,
  title:string,
  id:number,
}
const SkillWithTitle = ({ title, icon ,id}: IProps) => {
  const { ref,mainControls,SlideControls} = useTargetAnimationOnScrolling()

  return (
    <motion.div
    key={id}
        variants={{
          hidden: { opacity: 0,  x: id % 2 !== 0 ? 10 : -10 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: id * 0.09 }}
        className="skillContainer"
      >
        <div ref={ref} className="skilltest ">
        
        <div className="iconSkill">
          <Image
            width={80}
            height={80}
            src={icon}
            alt="ed"
            className="iconsSkillsImages"
          />
        </div>
        <div
          className={`
          relative overflow-hidden
           ${title === "Javascript" || title === "Typescript"
              ? "titleOfSkillsLong "
              : "titleOfSkills "
            }
          `}
        >
          <h2>{title}</h2>
          <motion.div
          variants={{
            hidden: {left:"0"},
            visible: {left:id % 2 !== 0 ? '-100%' : '100%'}
          }}
          initial='hidden'
          animate={SlideControls}
          transition={{duration:0.5,ease: "easeIn", delay:id *0.14}}
          className="skillsContainerAnimation" 
          >
            </motion.div>
        </div>
      
    </div>
      </motion.div>
  );
};
export default SkillWithTitle;
