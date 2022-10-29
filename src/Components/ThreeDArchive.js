import React, { useEffect, useState } from "react";
import Marquee from "./Marquee";
import { Link } from "react-router-dom";
import SanityClient from "../SanityClient";

export default function ThreeD() {
  const [threeData, setThreeData] = useState();

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "3dImages"] {
      medium,
      image{
            asset->{
              _id,
              url
            },
          }
    }`
    )
      .then((data) => setThreeData(data))
      .catch(console.error);
  }, []);

  console.log(threeData);

  return (
    <div className="content-container">
      <Marquee title="3D ARCHIVE" />

      <div className="full-width box">
        <h1>3D Graphics Archive</h1>
        <p>Miscelaneous 3D works.</p>

        <div className="grid">
          {threeData &&
            threeData.map((threeData) => (
              <div
                className="grid-item-threed box"
                style={{
                  backgroundImage: `url(${
                    threeData.image && threeData.image.asset.url
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  borderRadius: "29px",
                }}
              ></div>
            ))}
        </div>

        <Link to="/">
          <p>&larr; back</p>
        </Link>
      </div>

      <Marquee title="3D ARCHIVE" />
    </div>
  );
}
