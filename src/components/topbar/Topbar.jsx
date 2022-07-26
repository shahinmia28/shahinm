import "./topbar.scss";
import { Link } from "react-router-dom";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? "topbar active" : "topbar"}>
      <div className="wrapper row d-flex">
        <div className="col-10 d-flex left">
          <h1>
            <Link to={"/"} className="top-logo">
              Shahin M.
            </Link>
          </h1>
          <div className="mx-4 phone d-none d-md-inline">
            <i className="fa-solid fa-mobile-screen "></i>
            <span> +880 1777 296 933</span>
          </div>
          <div className="email d-none d-md-inline">
            <i className="fa-solid fa-envelope-open-text mx-2"></i>
            <span>contact.shahinmia@gmail.com</span>
          </div>
        </div>

        <div className="col-2 right d-flex">
          <div
            className="toggle-menu d-flex"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
