import React, { useEffect, useState } from "react";
import Marquee from "./Marquee";
import ProjectBox from "./ProjectBox";
import bg1 from "./media/bottom_icon1.jpg";
import bg2 from "./media/bottom_icon2.jpg";
import bg3 from "./media/3d_icon.png";
import { Link } from "react-router-dom";
import SanityClient from "../SanityClient";

export default function ProjectGrid() {
  const [projectData, setProjectData] = useState();

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "project"] {
      name, 
      medium,
      type,
      image{
            asset->{
              _id,
              url
            },
          },
      order,
      slug,
      textDate,
      gridSize
    }|order(order asc)`
    )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  console.log(projectData);

  return (
    <div className="content-container">
      <Marquee title="SELECTED WORKS" />

      <img alt="bg" className="bg-img-fixed-top" src={bg2}></img>
      <img alt="bg" className="bg-img-fixed-middle" src={bg1}></img>
      <img alt="bg" className="bg-img-fixed-bottom" src={bg3}></img>

      <div className="portfolio-grid-container px-4 md:px-0">
        <div className="small box top">
          <Link to="/generative">
            <h3>
              <span className="beth-ellen">Generative</span> Art <br></br>{" "}
              <span className="stars">Gallery</span>
            </h3>
          </Link>
        </div>

        <div className="small box bottom">
          <Link to="/threed">
            <h3>
              <span className="beth-ellen">3D</span> Graphics <br></br>{" "}
              <span className="stars">Archive</span>
            </h3>
          </Link>
        </div>

        {projectData &&
          projectData.map((projectData) => (
            <ProjectBox
              key={projectData._id}
              index={projectData.order}
              name={projectData.name}
              date={projectData.textDate}
              desc={projectData.description}
              desc2={projectData.description2}
              medium={projectData.medium}
              type={projectData.type}
              link={projectData.link}
              linkName={projectData.linkName}
              image1={projectData.image}
              image2={projectData.secondaryImage}
              image3={projectData.tertiaryImage}
              isBig={projectData.gridSize}
              slug={projectData.slug}
            />
          ))}

        {/* <Link className="medium box page-link" to="/project">
        <div className="project-details-container" style={{ backgroundImage: `url(${background})`,
              backgroundRepeat: 'no-repeat', 
              width: "100%",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
              borderRadius: "29px"
              }}>

            <h1 className="title">Title</h1>
              <div className="project-details background-blur">
                <p>Date</p>
                <p>Type</p>
                <p>Mediums</p>
              </div>
        </div>
    </Link> */}
        {/* 
      <div className="medium box"></div>
      <div className="medium box"></div>
      <div className="large box"></div>
      <div className="medium box"></div>
      <div className="medium box"></div>
      <div className="medium box"></div>
      <div className="medium box"></div>
      <div className="medium box"></div>
      <div className="large box"></div> */}
      </div>

      <Marquee title="PORTFOLIO" />
    </div>
  );
}
