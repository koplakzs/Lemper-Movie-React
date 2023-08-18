import "../../App.css";
import { Link, useLocation } from "react-router-dom";
import Search from "../common/SearchButton";
const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Lemper Movie
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-5">
            <Link
              to="/"
              className={`nav nav-link text-white ${
                location.pathname === "/" && "active"
              } `}
              aria-current="page"
            >
              Movie
            </Link>
          </div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
