import React, { useState } from "react";
import Title from "../common/heading/title/Title.jsx";
import { faq } from "../../../src/dummeydata.js";
import { AiFillCaretDown } from "react-icons/ai";
const Faq = () => {
  const [click, setclick] = useState(false);

  const toggle = (index) => {
    if (click === index) {
      return setclick(null);
    }
    setclick(index);
  };

  return (
    <>
      <Title subtitle="FAQS" title="Frequesntly Ask Questions" />
      <section className="faq">
        <div className="container">
          {faq.map((val, index) => (
            <div className="box">
              <button
                className="accordion"
                onClick={() => toggle(index)}
                key={index}
              >
                <h2>{val.title}</h2>
                <span>
                  {click === index ? (
                    <i>
                      <AiFillCaretDown />
                    </i>
                  ) : (
                    <i>
                      <AiFillCaretDown />
                    </i>
                  )}
                </span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
