import React from "react";
import Back from "../Back/Back";
import Head from "../common/heading/Head";
import Navbar from "../navbar/Navbar";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
const CourseHome = () => {
  return (
    <>
      {" "}
      <Back title="Explore Courses" />
      <Head />
      <Navbar />
      <div className="margin"></div>
      <CoursesCard />
      <OnlineCourses />
    </>
  );
};

export default CourseHome;
