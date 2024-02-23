import React from "react";
import { team } from "../../dummeydata";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import './Team.css'
const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="items shadow">
          <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
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
            </div>
          </div>
          <div className="details">
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
