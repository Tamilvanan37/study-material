import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { blog } from "../../dummeydata.js";
import "./blog.css";

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className="items shadow">
          <div className="img">
            <img src={val.cover} alt="" />
          </div>
          <div className="text">
            <div className="admin flexSB">
              <span>
                <i>
                  <AiOutlineUser />
                </i>
                <label htmlFor="">{val.type}</label>
              </span>
              <span>
                <i>
                  <BsCalendar3 />
                </i>
                <label htmlFor="">{val.date}</label>
              </span>
              <span>
                <i>
                  <BiCommentDots />
                </i>
                <label htmlFor="">{val.com}</label>
              </span>
            </div>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
