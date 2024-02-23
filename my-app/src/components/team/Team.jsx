import React from "react";
import Head from "../common/heading/Head";
import Navbar from "../navbar/Navbar";
import Back from "../Back/Back";
import TeamCard from "./TeamCard";
import "../About/about.css";
const Team = () => {
  return (
    <div>
      <Head />
      <Navbar />
      <Back title="Team" />
      <div className="margin"></div>
      <section className="team padding">
        <div className="container grid4">
          <TeamCard />
        </div>
      </section>
    </div>
  );
};

export default Team;
