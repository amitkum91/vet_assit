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
  const [profileType, setProfileType] = useState("");
  const [logintype, setLoginType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "INVALID USERNAME/PASSWORD",
    pass: "INVALID USERNAME/PASSWORD",
    registerUser: "PLEASE REGISTER YOURSELF!"
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    if(logintype === "1"){
    const userData = fetch("http://localhost:8000/api/custlogin")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(JSON.stringify(data));
        if (data && data.length > 0) {
          let newArr = data.map((item) => {
            if (userData) {
              if (item.password <= 6) {
                setErrorMessages({ name: "pass", message: errors.pass });
                console.log("password ::::1");
              } else if (item.cust_name !== userName) {
                setErrorMessages({ name: "uname", message: errors.uname });
                console.log("cust_name ::::1");
              } else {
                setIsSubmitted(true);
                setCustId(item.cust_id);
                setProfileType(item.profiletype);
              }
            } else {
              // Username not found
              console.log("userdata::::1");
              setErrorMessages({ name: "uname", message: errors.uname });
            }
          });

        } else {
          setErrorMessages({ name: "uname", message: errors.registerUser });
        }
      })
      .catch((error) => {
        console.log("Login type 1 - There was a problem with the request.:::",error);
      });
    }else if(logintype === "2"){
      const userData = fetch("http://localhost:8000/api/docreg")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          let newArr = data.map((item) => {
            if (userData) {
              if (item.password <= 6) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
              } else if (item.doc_name !== userName) {
                setErrorMessages({ name: "uname", message: errors.uname });
              } else {
                setIsSubmitted(true);
                setCustId(item.doc_id);
                setProfileType(item.profiletype);
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
        console.log("Login type 2 - There was a problem with the request.:::",error);
      });
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      if(profileType === "1"){
      history.push("/PetRegister", {
        state: { cust_id: cust_id, userName: userName, password: password, profileType : profileType },
      });
    }else if(profileType === "2"){
      history.push("/PhysicianHomePage", {
        state: { cust_id: cust_id, userName: userName, password: password, profileType : profileType },
      });
    }
    }
  }, [isSubmitted]);

  const renderErrorMessage = (name) => {
      <div className="error">{errorMessages.message}</div>
  };
  return (
    <div className="header">
   
    <img src={homeImage} class="container_login" alt="Norway"/>
    <div className="loginbox">
    <img src={vetSymbol} className="container_login1" alt="Norway"/>

    <div className="content_section">
        <div className="form-container">
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
         <div class="col-19">
              <select class="textbox-19" id="logintype" name="logintype" value={logintype}  onChange={(e) => setLoginType(e.target.value)}>
                      <option value="">select login type</option>
                       <option value="1">Client</option>
                       <option value="2">Employee</option>
             </select>
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