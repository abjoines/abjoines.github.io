import React from "react";
import Icons from "./media/icons.png";

export default function Sidebar() {
  return (
    <div className="sidebar-container min-h-[100vh] max-h-[100vh]">
      <div className="sidebar flex md:px-[40px] md:py-[30px] px-8 py-[10vw] justify-between gap-2">
        <div className="bio">
          <p>
            <span className="beth-ellen">Alyssa</span>
            <br></br>
            <span className="stars">Joines</span>
            is a frontend developer, designer, and generative artist.{" "}
          </p>
          <p>
            BFA in Design & Technology<br></br>
            Parsons School of Design, The New School<br></br>
            New York, NY
          </p>
          <p>
            BA in Interdisicplinary Science<br></br>
            Eugene Lang College, The New School<br></br>
            New York, NY
          </p>
        </div>

        <div className="contact text-left">
          <p>Currently Freelancing</p>
          <p>for inquiries please email:</p>
          <p>alyssajoines&#40;at&#41;gmail&#40;dot&#41;com</p>
        </div>

        <div className="links">
          <p>
            <a
              className="external-links"
              href="https://twitter.com/alyssajoines"
            >
              &#9734; twitter / alyssajoines &#9734;
            </a>
          </p>
          <p>
            <a
              className="external-links"
              href="https://www.fxhash.xyz/u/Alyssa%20Joines"
            >
              &#9734; fxhash / alyssa joines &#9734;
            </a>
          </p>
          <p>
            <a className="external-links" href="https://github.com/abjoines">
              &#9734; github / abjoines &#9734;
            </a>
          </p>
          <p>
            <a
              className="external-links"
              href="https://www.are.na/alyssa-joines"
            >
              &#9734; are.na / alyssa joines &#9734;
            </a>
          </p>
          <br></br>
          <p>last updated 8/30/24</p>
          <p>designed and developed by Alyssa Joines &#9760;</p>

          <div className="gen-icons">
            <img alt="icon" className="icon-img m-auto" src={Icons}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
