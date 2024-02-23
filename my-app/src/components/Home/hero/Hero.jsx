import React from "react";
import "./hero.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Title from "../../common/heading/title/Title";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title subtitle="WELCOME TO ACDAMIA" title='Best online Education'/>
            <p>
              Create React App doesn’t handle backend logic or databases; it
              just creates a frontend build pipeline, so you can use it with any
              backend you want. Under the hood, it uses Babel and webpack, but
              you don’t need to know anything about them.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <AiOutlineArrowRight />
              </button> <button >
                VIEW COURSE<AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
