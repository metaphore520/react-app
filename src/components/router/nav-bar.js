import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        {/* <a className="nav-link active" aria-current="page" href="#">
          Main Page
        </a> */}
        <Link className="nav-link active" to={`reactpage`}>
          React Page
        </Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          Side Page
        </a> */}
        <Link className="nav-link" to={`custompage/5`}>
          Side Page
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
  );
};

export default NavBar;
