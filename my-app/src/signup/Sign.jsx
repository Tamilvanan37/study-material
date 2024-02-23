import React, { useState } from "react";
import "./sign.css";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    // setIsLoggedIn(true);
    navigate("/login");
  };

  const value = localStorage.getItem("isLoggedin");
  console.log("value", value);
  const handleLogout = () => {
    // setIsLoggedIn(false);
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("isLoggedin")
    navigate("/login");
  };

  return (
    <>
      <div className="login">
        {value === null ? (
          <button onClick={handleLogin}>Login</button>

        ) : ( 
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </>
  );
};

export default Sign;
