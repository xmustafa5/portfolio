import { Sections } from "@/enums/global";
import Image from "next/image";
import myImage from "@/assets/images/myImage.png";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
const HomePortfolio = ({ homeSectionRef }: any) => {
  const ref = useRef<null>(null);
  const isInView = useInView(homeSectionRef, { once: false });
  const mainControls = useAnimation();
  const SlideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      SlideControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="home" id={Sections.HOME_SECTION} ref={homeSectionRef}>
      <div className="RightHome">
        <div className="containerRight ">
          <div className=" relative w-fit ">
            <div className="titles">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="titleName"
              >
                Hi, I’m Mustafa Mohammed
              </motion.h1>
              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.425 }}
                className="titleDeveloper"
              >
                front-end developer
              </motion.h3>
            </div>
          </div>
          <div className="aboutMy">
            <p>
              Passionate about web development, I thrive on the opportunity to
              learn and grow. Proficient in HTML, CSS, JavaScript, React.js. I
              constantly seek to expand my skill set and embrace new challenges
            </p>
          </div>
          <div className="containerDownloadCv">
            <a href="mustafaMohammed.pdf" className="downloadCvButton" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="leftHome">
        <Image src={myImage} alt="myImage" className="myImage" />
      </div>
    </section>
  );
};
export default HomePortfolio;
