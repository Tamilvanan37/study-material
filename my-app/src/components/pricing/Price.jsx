import React from "react";
import Back from "../Back/Back.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Head from "../common/heading/Head.jsx";
import PriceCard from "./PriceCard.jsx";
import Faq from "./Faq.jsx";
const Price = () => {
  return (
    <div>
      <Head />
      <Navbar />
      <Back title=" Choose the right plan" />
      <div className="margin"></div>
      <section className="price padding">
        <div className="container grid ">
         <PriceCard/>
        </div>
      </section>
      <Faq/>
    </div>
  );
};

export default Price;
