import { Outlet } from "react-router-dom";
import NavBar from "./nav-bar";

function Root() {
  return(
  <div>
    <h1>This is Root Component</h1>
    <NavBar></NavBar>
    <Outlet />
  </div>
  )
}

export default Root;
