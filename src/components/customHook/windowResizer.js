import useResizeWindow from "./useResizeWindow";

function WindowResizer() {
  const windowWidth = useResizeWindow(768);
  return <h1>{windowWidth ? "Window is Greater" : "Window is Smaller"}</h1>;
}

export default WindowResizer;
