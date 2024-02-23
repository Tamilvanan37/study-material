import React from "react";
import myImage from "../../image/about.webp";
import Title from "../common/heading/title/Title";
import { homeAbout } from "../../../src/dummeydata.js";
import Awrapper from "./Awrapper";
import "../About/about.css";
const Aboutcard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src={myImage} alt="" />
          </div>
          <div className="right row">
            <Title
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="itema flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default Aboutcard;
