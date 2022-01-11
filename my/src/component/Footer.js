import React from "react";

function Footer() {
  return (
    <footer
      className="page-footer fixed-bottom font-small"
      style={{ backgroundColor: "#CD5C5C" }}
    >
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              className="btn-floating btn-fb mx-1"
              href="https://github.com/cMfarris"
            >
              <i className="fab fa-github" style={{ color: "black" }}>
                {" "}
              </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/celeste-farris-390999b9/"
            >
              <i className="fab fa-linkedin-in" style={{ color: "black" }}>
                {" "}
              </i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center">
        © 2022 Copyright:
        <a
          href="https://github.com/cMfarris/react-portfolio"
          style={{ color: "black" }}
        >
          {" "}
         Celeste Farris
        </a>
      </div>
    </footer>
  );
}

export default Footer;