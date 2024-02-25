import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import homeImage from "../images/doggo.png";
import vetSymbol from "../images/vetsymbol.png";
import PetRegister from './PetRegister';
import PhysicianHomePage from './PhysicianHomePage';
import Footer from "./Footer";

function UserHome(props) {
  const location = useLocation();
  const history = useHistory();
  const user = location.state;
  const [errorMessages, setErrorMessages] = useState({});
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [cust_id, setCustId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "INVALID USERNAME/PASSWORD",
    pass: "INVALID USERNAME/PASSWORD",
    registerUser: "PLEASE REGISTER YOURSELF!"
  };
  const handleSubmit = (event) => {
  
    //Prevent page reload
    event.preventDefault();
    const userData = fetch("http://localhost:8000/api/custlogin")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(JSON.stringify(data));
        if (data && data.length > 0) {
          let newArr = data.map((item) => {
            if (userData) {
              
              if (item.password !== password) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
               
                console.log("password:::",item.password);
              console.log("cust_name:::",item.cust_name);
              } else if (item.cust_name !== userName) {
                setErrorMessages({ name: "uname", message: errors.uname });
              } else {
                setIsSubmitted(true);
                setCustId(item.cust_id);
                console.log("setIsSubmitted - cust_id2:::",customerID);
              }
            } else {
              // Username not found
              setErrorMessages({ name: "uname", message: errors.uname });
            }
          });

        } else {
          setErrorMessages({ name: "uname", message: errors.registerUser });
        }
      })
      .catch((error) => {
        alert("There was a problem with the request.");
      });
  };
  useEffect(() => {
    if (isSubmitted) {
      history.push("/PetRegister", {
        state: { cust_id: cust_id, userName: userName, password: password },
      });
      // history.push("/PhysicianHomePage", {
      //   state: { cust_id: cust_id, userName: userName, password: password },
      // });
    }
  }, [isSubmitted]);

  const renderErrorMessage = (name) => {
    // name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    //);
  };
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
	            <input class="textbox-19" type="text" placeholder="User Name"  name="uname"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required/>
	            <span class="focus-border-19"><i></i></span>
              <div className="error">{errorMessages.message}</div>
          </div>
         
        <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="Password" name="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>
	          <span class="focus-border-19"><i></i></span> 
            <div className="error">{errorMessages.message}</div>
         </div>
          <div className="button-container">
            <button
              id="login"
              class="btn btn-primary btn-sm"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              <span>Login</span>
            </button>
            <button
              id="register"
              class="btn btn-primary btn-sm"
              type="submit"
              onClick={() =>
                history.push({
                  pathname: "/Register",
                })
              }
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
