import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";
import vetSymbol from "../images/vetsymbol.png";

function UserHome(props) {
  const location = useLocation();
  const history = useHistory();
  const user = location.state;
  return (
<div className="header-phyHomePage">
<div className="loginbox-physician1">
  <img src={vetSymbol} className="container_login1" alt="Norway"/>
</div>
<div className="loginbox-payment1">
  
        <span>
             <strong>PET ID</strong>
        </span>
</div>
<div className="loginbox-physician2">
        <span>
             <strong>APPOINTMENT</strong>
        </span>
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
