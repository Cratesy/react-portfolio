import React from "react";
import { BiCycling } from "react-icons/bi";
import { GiMountainCave } from "react-icons/gi";
import { HiDesktopComputer } from "react-icons/hi";

import "./index.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="hobbies">
        <h2>Hobbies:</h2>
        <div>
          <HiDesktopComputer />
          Pc Gaming
        </div>
        <div>
          <GiMountainCave />
          Hiking ( love Malvern Hills )
        </div>

        <div>
          <BiCycling />
          Cycling
        </div>
      </div>
      <div className="Summary">
        <h3>About Me</h3>
        <p>
          Hey Im Michael, i have a passion for all things computer. I love to
          build computers and also there software. So current i'm on a full
          stack web developer course. which im loving.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
