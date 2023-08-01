import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-warning mt-5">
      <div className="container">
        <footer className="py-3 ">
          <ul className="nav justify-content-center border-bottom border-secondary border-2 pb-3 mb-3 gap-3">
            <li className="nav-item">
              <a
                href="#"
                className="nav-footer nav-link px-2 rounded-2 fw-bold"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-footer nav-link px-2 rounded-2 fw-bold"
              >
                TV Series
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-footer nav-link px-2 rounded-2 fw-bold"
              >
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">&copy; 2023 Lemper Code</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
