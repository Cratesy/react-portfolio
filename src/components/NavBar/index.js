import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import "./index.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div>
        <div>
          <h1 className="title">Michael Crates</h1>
        </div>
        <div className="buttons">
          <Link to="/">
            <Button name="About Me" />
          </Link>
          <Link to="/projects">
            <Button name="Projects" />
          </Link>
          <Link to="/contact-me">
            <Button name="Contact Me" />
          </Link>
          <a href="https://drive.google.com/file/d/1P0R7viqD9GeouLT7PQu3S7xJ0Tr_DttE/view?usp=sharing">
            <Button name="Resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
