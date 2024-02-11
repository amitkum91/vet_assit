import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import homeImage from "../images/mobile.png";
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
	            <input class="textbox-19" type="text" placeholder="Date" required/>
	            <span class="focus-border-19"><i></i></span>
          </div>
         
        <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="Time" required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
         <div class="col-19">
              <select class="textbox-19" id="phone" name="phone">
                      <option value="">select Physician</option>
                       <option value="1">Dr. A</option>
                       <option value="2">Dr. B</option>
             </select>
         </div>
          <div className="button-container">
           
            <button
              id="register"
              class="btn btn-primary btn-sm"
              type="submit"
            >
              <span>Register</span>
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
