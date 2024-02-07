import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import homeImage from "../images/doggo.png";
import vetSymbol from "../images/vetsymbol.png";
import Footer from "./Footer";

function UserHome(props) {
  const location = useLocation();
  const history = useHistory();
  const user = location.state;
  return (
    <div className="header">
   
    <img src={homeImage} class="container_login" alt="Norway"/>
    <div className="loginbox">
    <img src={vetSymbol} className="container_login1" alt="Norway"/>

    <div className="content_section">
        <div className="form-container">
          <div className="input-container">
            <label class="lbl">Username </label>
            <input
              type="text"
              name="uname"
              required
            />
          </div>
          <div className="input-container">
            <label class="lbl">Password </label>
            <input
              type="password"
              name="pass"
              required
            />
          </div>
          <div className="button-container">
            <button
              id="login"
              class="btn"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              <h2>Login</h2>
            </button>
            <button
              id="register"
              class="btn"
              type="submit"
            >
              <h2>Register</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="footer">
         <Footer />
     </div>
    </div>
     
  );
}

export default UserHome;
