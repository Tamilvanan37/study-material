import React, { useState } from "react";
import Head from "./Head";
import "../heading/Header.css";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Home from "../../Home/Home";
const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Courses">All Courses</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Team">Team</Link>
            </li>
            <li>
              <Link to="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/Journal">Journal</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Dasborad">Dasborad</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>{" "}
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <AiOutlineCloseCircle /> : <VscThreeBars />}
          </button>
        </nav>
      </header>{" "}
      <Home />
    </>
  );
};

export default Header;
