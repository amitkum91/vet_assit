import React, { useState, useEffect } from "react";

import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";

function UserHome(props) {
  const location = useLocation();
  const history = useHistory();
  const user = location.state;
  return (
    <div className="header">
      <div className="container_login">
        <nav className="nav_checkbox">
          hello
        </nav>
      </div>
    </div>
  );
}

export default UserHome;
