import React from "react";
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
          <a href="/contact-me">
            <Button name="Contact Me" />
          </a>
          <a href="/">
            <Button name="About Me" />
          </a>
          <a href="/projects">
            <Button name="Projects" />
          </a>
          <a href="https://drive.google.com/file/d/1P0R7viqD9GeouLT7PQu3S7xJ0Tr_DttE/view?usp=sharing">
            <Button name="Resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
