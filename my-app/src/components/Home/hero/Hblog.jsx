import React from "react";
import Title from "../../common/heading/title/Title.jsx";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { blog } from "../../../dummeydata.js";
const Hblog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Title subtitle="our blog" title="recent from the blog" />
          <div className="grid2">
            {blog.slice(0, 3).map((val) => (
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
