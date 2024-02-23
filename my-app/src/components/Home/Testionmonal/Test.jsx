import React from "react";
import Title from "../../common/heading/title/Title.jsx";
import { testimonal } from "../../../../src/dummeydata.js";
import { ImQuotesLeft } from "react-icons/im";
import "./style.css";
const Test = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Title subtitle="Testimonal" title="our successful students" />

          <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />

                    <i>
                    
                      <ImQuotesLeft />
                    </i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
