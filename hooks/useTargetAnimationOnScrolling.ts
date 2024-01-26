import {
    useAnimation,
    useInView,
  } from "framer-motion";
  import { useEffect, useRef } from "react";


function useTargetAnimationOnScrolling(){
    
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false });
    const mainControls = useAnimation();
    const SlideControls = useAnimation();
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
        SlideControls.start("visible");
      }
    }, [isInView]);
    return{
        ref,
        mainControls,
        SlideControls
    }
}
export default useTargetAnimationOnScrolling;