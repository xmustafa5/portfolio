import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SkillWithTitle = ({ title, icon ,id}: any) => {
  const ref = useRef<null>(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const SlideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      SlideControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
    key={id}
        variants={{
          hidden: { opacity: 0, x: 10 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: id * 0.25 }}
        className="skillContainer"
      >
        <div ref={ref} className="skilltest">
        
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
          className={
            title === "Javascript" || title === "Typescript"
              ? "titleOfSkillsLong"
              : "titleOfSkills"
          }
        >
          <h2>{title}</h2>
        </div>
    </div>
      </motion.div>
  );
};
export default SkillWithTitle;
