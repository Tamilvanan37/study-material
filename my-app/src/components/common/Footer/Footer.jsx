import React from "react";
import "./footer.css";
import { BiPaperPlane } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { blog } from "../../../dummeydata.js";
const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i>
              <BiPaperPlane />
            </i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>EASY LEARNING</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <i>
              <FaFacebookF />
            </i>
            <i>
              <FaInstagram />
            </i>
            <i>
              <BsTwitter />
            </i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i>
                      <BsCalendar3 />
                    </i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i>
                      <AiOutlineUser />
                    </i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i>
                  <BiMap />
                </i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i>
                  <AiOutlinePhone />
                </i>
                +91 98765443210
              </li>
              <li>
                <i>
                  <BiPaperPlane />
                </i>
                examble@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2022 All rights reserved</p>
      </div>
    
    </>
  );
};

export default Footer;
