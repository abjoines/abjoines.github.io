import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectBox(props) {
  return (
    <>
      <Link
        className={props.isBig ? "large box page-link" : "medium box page-link"}
        to={props.slug.current}
      >
        <div
          className="project-details-container"
          style={{
            backgroundImage: `url(${props.image1 && props.image1.asset.url})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            borderRadius: "29px",
          }}
        >
          <h1 className="title"></h1>
          <div className="project-details background-blur">
            <p>{props.date && props.date}</p>
            {/* <p>{props.type && props.type}</p> */}
            <p>{props.medium && props.medium}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
