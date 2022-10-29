import React, { useEffect, useState } from "react";
import Marquee from "./Marquee";
import { Link } from "react-router-dom";
import SanityClient from "../SanityClient";

export default function GenArchive() {
  const [genData, setGenData] = useState();

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "genImages"] {
      medium,
      image{
            asset->{
              _id,
              url
            },
          }
    }`
    )
      .then((data) => setGenData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="content-container">
      <Marquee title="GENERATIVE ART ARCHIVE" />

      <div className="full-width box">
        <h1>Generative Art Archive</h1>
        <p>Miscelaneous recent generative projects and sketches.</p>

        <div className="grid">
          {genData &&
            genData.map((genData) => (
              <div
                className="grid-item-generative box"
                style={{
                  backgroundImage: `url(${
                    genData.image && genData.image.asset.url
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

      <Marquee title="GENERATIVE ART ARCHIVE" />
    </div>
  );
}