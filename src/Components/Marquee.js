import React from "react";

export default function Marquee(props) {
  return (
    <div className="wrapper">
      <div className="marquee">
        <p className="stars">{props.title}</p>
        <p className="stars">{props.title}</p>
        <p className="stars">{props.title}</p>
        <p className="stars">{props.title}</p>
        <p className="stars">{props.title}</p>
        <p className="stars">{props.title}</p>
        <p className="stars">{props.title}</p>
        <p className="stars">{props.title}</p>
      </div>
    </div>
  );
}
