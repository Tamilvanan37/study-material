import React from "react";
import BlogCard from "./BlogCard";
import Navbar from "../navbar/Navbar";
import Head from "../common/heading/Head";
import Back from "../Back/Back.jsx";
const Blog = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Back title="Blog Posts" />
      <div className="margin"></div>
      <section className="blog padding">
        <div className="container grid2">
        <BlogCard />
        </div>
      </section>
      
    </>
  );
};

export default Blog;
