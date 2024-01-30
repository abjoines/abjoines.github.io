import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SanityClient from "../SanityClient";
import Marquee from "./Marquee";

export default function Project() {
  const [pageData, setPageData] = useState();
  const { slug } = useParams();

  useEffect(() => {
    SanityClient.fetch(
      `*[slug.current == "${slug}"]{
          slug,
          image{
            asset->{
              _id,
              url
            },
          },
          secondaryImage{
                asset->{
                  _id,
                  url
                },
              },
          tertiaryImage{
                asset->{
                  _id,
                  url
                },
              },
          link,
          linkName,
          name, 
          description,
          description2,
          medium,
          type,
          textDate,
          attribution
    }`
    )
      .then((data) => setPageData(data[0]))
      .catch(console.error);
  }, [slug]);

  console.log(pageData);

  if (!pageData) return <div>Project not found</div>;

  return (
    <div className="content-container">
      <Marquee title="SELECTED WORK" />

      <div className="full-width box split">
        <div className="project-text">
          <div>
            <h1>{pageData.name && pageData.name}</h1>

            <div className="project-details">
              <p>{pageData.textDate && pageData.textDate}</p>
              <p>{pageData.type && pageData.type}</p>
              <p>{pageData.medium && pageData.medium}</p>
            </div>
            <br></br>
            <p>{pageData.description && pageData.description}</p>
            <p>{pageData.description2 && pageData.description2}</p>
          </div>

          {pageData.link && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href={pageData.link}
            >
              {pageData.linkName}
            </a>
          )}
          {pageData.attribution && <p>{pageData.attribution}</p>}

          <Link to="/">
            <p>&larr; home</p>
          </Link>
        </div>

        <div className="project-images">
          <img
            alt=""
            src={pageData.image.asset.url && pageData.image.asset.url}
          ></img>
          {pageData.secondaryImage && (
            <img alt="" src={pageData.secondaryImage.asset.url}></img>
          )}
          {pageData.tertiaryImage && (
            <img alt="" src={pageData.tertiaryImage.asset.url}></img>
          )}
        </div>
      </div>

      <Marquee title="PORTFOLIO" />
    </div>
  );
}
