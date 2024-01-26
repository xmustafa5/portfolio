import { debounce } from "@/utils/functions/debounce";
import { useState, useEffect, useCallback, useMemo } from "react";
type ObjectType = {
  width?: number;
  height?: number;
  isMobile: boolean;
  isDesktop: boolean;
};

function useDeviceInfo() {
  const SCREEN_SIZES = {
    MOBILE_WIDTH: 567,
  };
  const { MOBILE_WIDTH } = SCREEN_SIZES;

  const [object, setObject] = useState<ObjectType>({
    width: undefined,
    height: undefined,
    isMobile: false,
    isDesktop: false,
  });

  const handleResize = useCallback(() => {
    const width = document.documentElement.clientWidth || window.innerWidth;
    const height = document.documentElement.clientHeight || window.innerHeight;

    if (width !== object.width || height !== object.height) {
      setObject({
        width,
        height,
        isMobile: width <= MOBILE_WIDTH,
        isDesktop: width > MOBILE_WIDTH,
      });
    }
  }, [MOBILE_WIDTH, object]);

  const debouncedHandleResize = useMemo(() => {
    return debounce(handleResize, 100);
  }, [handleResize]);
  useEffect(() => {
    window.addEventListener("resize", debouncedHandleResize);
    return;
  }, [debouncedHandleResize]);
  useEffect(() => {
    debouncedHandleResize();
  }, []);

  return object;
}

export default useDeviceInfo;