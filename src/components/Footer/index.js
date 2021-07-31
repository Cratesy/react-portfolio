import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        Built by Michael Crates&copy;
        <a href="https://github.com/Cratesy">
          <i className="logo">
            <FaGithub title="Github" />
          </i>
        </a>
        <a href="https://www.linkedin.com/in/michael-crates-538752200/">
          <i className="logo">
            <FaLinkedin title="LinkedIn" />
          </i>
        </a>
      </footer>
      <small className="small">
        No frameworks was hurt in the making of this site
      </small>
    </div>
  );
};

export default Footer;
