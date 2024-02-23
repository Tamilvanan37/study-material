import React from "react";
import Back from "../Back/Back.jsx";
import Head from "../common/heading/Head";
import Navbar from "../navbar/Navbar.jsx";
import Aboutcard from "./Aboutcard.jsx";

const About = () => {
  return (
    <div>
      <Head />
      <Navbar />
      <Back title="About us" />
      <div className="margin"></div>
      <Aboutcard />
    </div>
  );
};

export default About;
