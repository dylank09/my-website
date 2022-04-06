import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="nav-links-container">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/projects">
        Projects
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link" to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default SideBar;
