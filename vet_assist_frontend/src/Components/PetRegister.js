import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import homeImage from "../images/petregister.png";
import vetSymbol from "../images/vetsymbol.png";
import Footer from "./Footer";
import PhysicianAppointment from './PhysicianAppointment';
import { useRef } from 'react';

function PetRegister(props) {
  const location = useLocation();
  const isHome = useRef(false);
  const history = useHistory();
  useEffect(() => {
      console.log(location.pathname); // result: '/secondpage'
      console.log(location.state); // result: 'some_value'
  }, [location]);
  const [cust_id, setCustId] = useState(location.state.state.cust_id);
  const [pet_kind, setPetKind] = useState("");
  const [pet_age, setPetAge] = useState("");
  const [pet_weight, setPetWeight] = useState("");
  const [pet_sex, setPetSex] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPetRegistered, setIsPetRegistered] = useState(false);
  const [isAppointment, setIsAppointment] = useState(false);
  const [pet_id, setPetId] = useState(Date.now());

  
  const handleSubmit = (event) => {
    isHome.current = false;
    const blog = { cust_id,pet_id };
    fetch("http://localhost:8000/api/petreg", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog),
        })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if(data){
      isHome.current = true;
      if (isHome.current) {
        setIsSubmitted(true);
        const blog = { pet_id,pet_kind, pet_age,pet_weight, pet_sex };
        fetch("http://localhost:8000/api/pet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
          
          }).catch((error) => {
            console.log("error for pet:::::second api call",error)
          });
      }
    }
    }).catch((error) => {
      console.log("error for pet:::::first api call",error)
    }); 
}

const handleAppointment = (event) => {
  if (isPetRegistered) {
  const cust_id = location.state.state.cust_id;
  history.push("/PhysicianAppointment", {
    state: { cust_id: cust_id, pet_id: pet_id},
  });
}
}

  useEffect(() => {
    if (isHome.current && isSubmitted) {
      alert("Pet account created successfully.");
    }
  }, [isSubmitted]);
 
  return (
   
    <div className="header">
    <img src={homeImage} class="container_login" alt="Norway"/>
    <div className="loginbox">
    <img src={vetSymbol} className="container_login1" alt="Norway"/>

    <div className="content_section">
        <div className="form-container">
          <div class="col-19">
	            <input class="textbox-19" type="text" placeholder="pet_kind" value={pet_kind}
              onChange={(e) => setPetKind(e.target.value)} required/>
	            <span class="focus-border-19"><i></i></span>
          </div>
         
        <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="pet_age" value={pet_age}
              onChange={(e) => setPetAge(e.target.value)} required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="pet_weight" value={pet_weight}
              onChange={(e) => setPetWeight(e.target.value)} required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="pet_sex" value={pet_sex}
              onChange={(e) => setPetSex(e.target.value)}  required/>
	          <span class="focus-border-19"><i></i></span> 
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
              <span>Register</span>
            </button>
            <button
              id="appointment"
              class="btn btn-primary btn-sm"
              type="submit"
              onClick={(e) => history.push({
                pathname: '/bookApmt',
                state: { cust_id: cust_id}
            }
            )
            }
            >
              <span>Book Appointment</span>
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

export default PetRegister;
