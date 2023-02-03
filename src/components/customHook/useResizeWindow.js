import { useEffect, useState } from "react";

const useResizeWindow = (currentScreenSize) => {
  const [windowWidth, setwindowWidth] = useState(false);

  const windowResize = () => {
    setwindowWidth(window.innerWidth > currentScreenSize);
  };

  useEffect(() => {
    windowResize();
    window.addEventListener("resize", windowResize);
  }, []);
  return windowWidth;
};

export default useResizeWindow;
