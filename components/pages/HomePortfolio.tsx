import { Sections } from "@/enums/global";
import Image from "next/image";
import myImage from "@/assets/images/myImage.png";
const HomePortfolio = ({ homeSectionRef }: any) => {
  return (
    <section className="home" id={Sections.HOME_SECTION} ref={homeSectionRef}>
      <div className="RightHome">
        <div className="containerRight">
          <div className="titles">
            <h1 className="titleName">Hi, I’m Mustafa Mohammed</h1>
            <h3 className="titleDeveloper">front-end developer</h3>
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
