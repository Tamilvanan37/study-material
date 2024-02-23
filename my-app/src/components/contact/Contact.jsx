import React from "react";
import Navbar from "../navbar/Navbar";
import Head from "../common/heading/Head";
import Back from "../Back/Back.jsx";
import './contact.css'
const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11997.663084528212!2d77.65167091392377!3d12.858706599924403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6df68d32321d%3A0xeab6f4855df9bef7!2sTHOUGHT%20MOBILE%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1687426039139!5m2!1sen!2sin";
  return (
    <>
      <Head />
      <Navbar />
      <Back title="Contact Us   " />
      <div className="margin"></div>
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p> Ensure that the contact page is responsive and mobile-friendly.</p>
            <div className="item grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>126/2, hosa road, bangaloure 567803.</p>
              </div>
              <div className="box">
                <h4>Email</h4>
                <p>anbutamil620@gmail.com</p>
              </div>
              <div className="box">
                <h4>Phone</h4>
                <p>+91 9363330604</p>
              </div>
            </div>
            <from action="">
              <div className="flexSB">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
              </div>
              <input type="email" placeholder="subject" />
              <textarea cols="30" rows="10">
                Create a message here.....
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </from>
            <h3>Follow us here</h3>
            <span>FACEBOOK INSTAGREAM TWITWER YOUTUBE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
