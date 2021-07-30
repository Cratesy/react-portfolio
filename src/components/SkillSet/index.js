import React from "react";
import { FaNodeJs, FaHtml5, FaReact, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiVisualstudiocode,
} from "react-icons/si";

import "./index.css";

const skillSet = () => {
  return (
    <div className="skill-set">
      <i className="logo" title="Node.js">
        <FaNodeJs />
      </i>
      <i className="logo" title="HTML">
        <FaHtml5 />
      </i>
      <i className="logo" title="React">
        <FaReact />
      </i>
      <i className="logo" title="Css">
        <FaCss3Alt />
      </i>
      <i className="logo" title="Javascript">
        <IoLogoJavascript />
      </i>
      <i className="logo" title="MySQL">
        <SiMysql title="MySQL" />
      </i>
      <i className="logo" title="MongoDB">
        <SiMongodb title="MongoDB" />
      </i>
      <i className="logo" title="GraphQL">
        <SiGraphql title="GraphQL" />
      </i>
      <i className="logo" title="Visual Studio Code">
        <SiVisualstudiocode title="Visual Studio Code" />
      </i>
    </div>
  );
};

export default skillSet;
