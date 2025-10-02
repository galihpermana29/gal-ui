import { useMediaQuery } from "usehooks-ts";

export const useGlobalMediaQuery = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTabletOrIpad = useMediaQuery(
    "(min-width: 768px) and (max-width: 1279px)"
  );
  const isWideScreen = useMediaQuery("(min-width: 1280px)");
  const isSmallScreen = useMediaQuery("(max-width: 683px)");
  const isLessThan1024 = useMediaQuery("(max-width: 1024px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const isMaxWidth560 = useMediaQuery("(max-width:560px)");

  return {
    isMobile,
    isTabletOrIpad,
    isWideScreen,
    isSmallScreen,
    isLessThan1024,
    isTablet,
    isMaxWidth560,
  };
};
