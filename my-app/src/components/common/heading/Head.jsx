import React from "react";
import {FaFacebookF  } from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Sign from "../../../signup/Sign";
const Head = () => {
  return (
    <div>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>EASY  LEARNING</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>
          <div className="social">
            <i>
              <FaFacebookF className="icon" />
            </i>
            <i>
              <FaInstagram className="icon" />
            </i>
            <i>
              <BsTwitter className="icon" />
            </i>
            <i>
              <BsYoutube className="icon" />
            </i>
            <Sign/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Head;
