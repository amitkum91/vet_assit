import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import homeImage from "../images/doggo.png";
import vetSymbol from "../images/vetsymbol.png";
import uniqueId from 'lodash/uniqueId';
import { useRef } from 'react';
import Home from './Home'
import Footer from "./Footer";


function UserHome(props) {
  const isHome = useRef(false);
  const history = useHistory();
  const [errorMessages, setErrorMessages] = useState({});
  const [password, setPassword] = useState("");
  const [cust_name, setUserName] = useState("");
  const [cust_email, setEmail] = useState("");
  const [cust_address, setAddress] = useState("");
  const [reg_mobile_no, setMobileNumber] = useState("");
  const [profiletype, setProfileType] = useState("");
  const [department, setDepartment] = useState("");
  const [doc_age, setDocAge] = useState("");
  const [highest_qualification, setHighestQualification] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cust_id, setId] = useState(uniqueId('message-'));
  const errors = {
    uname: "Invalid email",
    pass: "Password should not be blank, password length should be greater then 6",
    loginMsg: "User already exists, Please login",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isHome.current = false;
    const date = new Date();
    ///checking if user exists
    const blog = { cust_id,cust_name, password,cust_email, cust_address,reg_mobile_no,profiletype };
    if(profiletype === "1"){
    const userData = fetch("http://localhost:8000/api/custlogin")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      
      if(data && data.length > 0){
      data.map((item) => {
       
        if (item.cust_name === cust_name) {
          setErrorMessages({ name: "uname", message: errors.loginMsg });
          isHome.current = false;
        }
        else if(password && password.length <= 6){
          setErrorMessages({ name: "pass", message: errors.pass });
          isHome.current = false;
        } else{
         isHome.current = true;
    }
      })
      if(isHome.current) {
          fetch("http://localhost:8000/api/custlogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setIsSubmitted(true);
              console.log("data to enter", data);
            })
            .catch((error) => {
              console.log("Login type 1 - There was a problem with the request.:::",error);
            });
      }
    }else{
      isHome.current = true;
      fetch("http://localhost:8000/api/custlogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsSubmitted(true);
          console.log("data to enter", data);
        })
        .catch((error) => {
          console.log("Login type 1 - There was a problem with the request.:::",error);
        });
  }
 });
}
else if(profiletype === "2"){
  const doc_name = cust_name;
  const address = cust_address;
  const doc_id = cust_id;
  const blog = { doc_id,doc_name,password,address,reg_mobile_no,department,doc_age,highest_qualification,contact,profiletype};
  isHome.current = false;
      const userData = fetch("http://localhost:8000/api/docreg")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if(data && data.length > 0){
        data.map((item) => {
          if (item.doc_name === doc_name) {
            setErrorMessages({ name: "uname", message: errors.loginMsg });
          
          }
         else if(password && password.length <= 6){
            setErrorMessages({ name: "pass", message: errors.pass });
          
          } else{
            isHome.current = true;
          }
        
        });
          if(isHome.current) {
            fetch("http://localhost:8000/api/docreg", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(blog),
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                setIsSubmitted(true);
                console.log("data to enter", data);
              })
              .catch((error) => {
                console.log("Login type 2 - There was a problem with the request.:::",error);
              });
              
          }
       
      }else{
        isHome.current = true;
        fetch("http://localhost:8000/api/docreg", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setIsSubmitted(true);
            console.log("data to enter", data);
          })
          .catch((error) => {
            console.log("Login type 2 - There was a problem with the request.:::",error);
          });
      }
      })
    }
  }
  useEffect(() => {
    if (isHome.current && isSubmitted) {
      setErrorMessages({});
      alert("Account created successfully.");
      history.push("/", {
        replace: true,
        state: { userName: cust_name, registeredFlag: "registerFlag" },
      });
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
              <select class="textbox-19" id="profiletype" name="profiletype" value={profiletype}  onChange={(e) => setProfileType(e.target.value)}>
                      <option value="">select profile type</option>
                       <option value="1">Customer</option>
                       <option value="2">Employee</option>
             </select>
         </div>
       
        { (profiletype === "1"  || profiletype === "2") &&
        <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="User Name" value={cust_name}
              onChange={(e) => setUserName(e.target.value)}
              required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
        }
        { (profiletype === "1"  || profiletype === "2") &&
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="Email Id" value={cust_email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
	          <span class="focus-border-19"><i></i></span>
         </div>
         }
         { (profiletype === "1"  || profiletype === "2") &&
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>
	          <span class="focus-border-19"><i></i></span>
         </div>
        }
      { (profiletype === "1"  || profiletype === "2") &&
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="Address" value={cust_address}
              onChange={(e) => setAddress(e.target.value)}
              required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
      }
      { (profiletype === "1"  || profiletype === "2") &&
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="mobileNumber" value={reg_mobile_no}
              onChange={(e) => setMobileNumber(e.target.value)}
              required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
       }
         { profiletype === "2"  &&
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="department" value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
        }
        { profiletype === "2"  &&
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="doc_age" value={doc_age}
              onChange={(e) => setDocAge(e.target.value)}
              required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
        }
        { profiletype === "2"  &&
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="highest_qualification" value={highest_qualification}
              onChange={(e) => setHighestQualification(e.target.value)}
              required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
        }
      { profiletype === "2"  &&
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="contact" value={contact}
              onChange={(e) => setContact(e.target.value)}
              required/>
	          <span class="focus-border-19"><i></i></span>
         </div>
      }
          <div className="button-container">
           
            <button
              id="register"
              class="btn btn-primary btn-sm"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              <span>Register</span>
            </button>
          </div>
        </div>
        <div className="error">{errorMessages.message}</div>
      </div>
    </div>
    
    <div className="footer">
         <Footer />
     </div>
    </div>
     
  );
}

export default UserHome;
