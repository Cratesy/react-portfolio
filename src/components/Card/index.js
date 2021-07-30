import React from "react";

import "./index.css";

const Card = (props) => {
  return (
    <div id="showcase" className="showcase">
      <div className="card">
        <h3>{props.name}</h3>
        <div className="image">
          <a href={props.url}>
            <img src={props.image} alt={props.alt} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
