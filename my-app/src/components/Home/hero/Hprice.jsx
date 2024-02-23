import React from "react";
import Title from "../../common/heading/title/Title.jsx";
import PriceCard from "../../pricing/PriceCard.jsx";
const Hprice = () => {
  return (
    <>
      <section className="hprice padding">
        <Title subtitle="our pricing" title="Pricing & packages" />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;
