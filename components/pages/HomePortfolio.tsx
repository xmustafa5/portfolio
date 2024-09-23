import { Sections } from "@/enums/global";
import Image from "next/image";
import myImage from "@/assets/images/myImage.png";
import myImage2 from "@/assets/images/myImage_2_-removebg-preview.png";
import { motion } from "framer-motion";
import { useState } from "react";
import useMousePosition from "@/hooks/useMousePosition";

interface IProps {
  homeSectionRef?: React.RefObject<HTMLDivElement>;
  setIsHovered: any;
  isHovered:boolean
}

const HomePortfolio = ({ homeSectionRef  }: IProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;


  return (
    <main className={"main h-screen"}>
    <motion.div 

      className={"mask"}

      animate={{

        WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,

        WebkitMaskSize: `${size}px`,

      }}

      transition={{ type: "tween", ease: "backOut", duration:0.5}}

    >
<div className="w-full flex justify-center items-center">

        <div onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className={"items-center p-10 justify-center w-fit flex"}>
        <div className="w-[400px] ">
        <Image src={myImage2} alt="myImage" className="" />
        </div>
        </div>
</div>

    </motion.div>



    <div className={"items-center p-10 justify-center flex"}>
    <div className="w-[400px] ">

        <Image src={myImage} alt="myImage" className="" />
</div>
    </div>



  </main>
  );
};
export default HomePortfolio;
