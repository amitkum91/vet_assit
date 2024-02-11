import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import homeImage from "../images/petregister.png";
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
          {/* <div className="input-container">
            <label class="lbl">Username </label>
            <input
              type="text"
              name="uname"
              required
            />
          </div> */}
          <div class="col-19">
	            <input class="textbox-19" type="text" placeholder="Pet Type" required/>
	            <span class="focus-border-19"><i></i></span>
          </div>
         
        <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="CustomerId" required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
          <div className="button-container">
            <button
              id="login"
              class="btn btn-primary btn-sm"
              type="submit"
            >
              <span>Register</span>
            </button>
            <button
              id="register"
              class="btn btn-primary btn-sm"
              type="submit"
            >
              <span>Appointment</span>
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
