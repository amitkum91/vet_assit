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
    <div className="loginbox_appointment">
    <img src={vetSymbol} className="container_login1" alt="Norway"/>

    <div className="content_section">
        <div className="form-container">
          <div class="col-19">
	            <span class="focus-appointment-191">Appointment details:<i></i></span>
          </div>
          <br></br>
        <div class="col-19">
	          <span class="focus-appointment-192">Date & Time:<i></i></span> 
         </div>
         <br></br>
         <div class="col-19">
	          <span class="focus-appointment-193">Venue:<i></i></span> 
         </div>
         <br></br>
         <div class="col-20">
              <span class="focus-appointment-194">Please reach 10mins before your scheduled time:<i></i></span>
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
