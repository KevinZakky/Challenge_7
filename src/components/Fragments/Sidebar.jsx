import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = ({ navRef, activeLink }) => {
  const location = useLocation();
  const getLinkClass = (path) =>
    location.pathname === path || activeLink === path
      ? "nav_link active"
      : "nav_link";
  return (
    <div className="l-navbar" id="nav-bar" ref={navRef}>
      <nav className="nav">
        <div>
          <Link to="#" className="nav_logo">
            {" "}
            <i className="bx bx-layer nav_logo-icon"></i>{" "}
            <span className="nav_logo-name">BBBootstrap</span>{" "}
          </Link>
          <div className="nav_list">
            {" "}
            <Link to="/dashboard" className={getLinkClass("/dashboard")}>
              {" "}
              <i className="bx bx-grid-alt nav_icon"></i>
              <span className="nav_name">Dashboard</span>{" "}
            </Link>{" "}
            <Link to="/listcars" className={getLinkClass("/listcars")}>
              <i className="bx bx-car nav_icon"></i>{" "}
              <span className="nav_name">Cars</span>
            </Link>{" "}
          </div>
        </div>{" "}
        <Link to="#" className="nav_link">
          {" "}
          <i className="bx bx-log-out nav_icon"></i>{" "}
          <span className="nav_name">SignOut</span>{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
