import React from "react";
import Header from "./components/common/heading/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Price from "./components/pricing/Price";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact.jsx";
import Login from "./signup/Login";
import Dasborad from "./components/Dashborad/Dasborad";
// import Login2 from "./signup/Login2";

// import Home from "./components/Home/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Header />} />
        <Route path="/Home" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/Courses" element={<CourseHome />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Pricing" element={<Price />} />
        <Route path="/Journal" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="/Dasborad" element={<Dasborad/>}/>
        {/* <Route path='login2'element={<Login2/>}/> */}
      </Routes>
    </>
  );
};

export default App;
