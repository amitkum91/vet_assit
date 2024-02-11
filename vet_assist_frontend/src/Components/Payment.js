import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";

function UserHome(props) {
  const location = useLocation();
  const history = useHistory();
  const user = location.state;
  return (
    <div className="header-payment">

    <div className="loginbox-payment1">
          <div class="col-19">
	            <input class="textbox-19" type="text" placeholder="Card Number" required/>
	            <span class="focus-border-19"><i></i></span>
          </div>
         
        <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="Password" required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
          <div className="button-container">
            <button
              id="login"
              class="btn btn-primary btn-sm"
              type="submit"
            >
              <span>Login</span>
            </button>
            <button
              id="register"
              class="btn btn-primary btn-sm"
              type="submit"
            >
              <span>Register</span>
            </button>
          </div>
        </div>
<div className="loginbox-payment2">  
    <div className="footer">
         <Footer />
     </div>
</div>
    </div>
     
  );
}

export default UserHome;
