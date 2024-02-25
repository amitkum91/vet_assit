import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import homeImage from "../images/petregister.png";
import vetSymbol from "../images/vetsymbol.png";
import Footer from "./Footer";
import PhysicianAppointment from './PhysicianAppointment';

function PetRegister(props) {
  const location = useLocation();
  const history = useHistory();
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
      console.log(location.pathname); // result: '/secondpage'
      console.log(location.state); // result: 'some_value'
  }, [location]);
  //console.log("useffect cust_id:::",location.state.state.userName);
  const [cust_id, setCustId] = useState(location.state.state.userName);
  const [pet_kind, setPetKind] = useState("");
  const [pet_age, setPetAge] = useState("");
  const [pet_weight, setPetWeight] = useState("");
  const [pet_sex, setPetSex] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPetRegistered, setIsPetRegistered] = useState(false);
  const [isAppointment, setIsAppointment] = useState(false);
  //const [pet_id, setPetId] = useState(String(Date.now().toString(32) + Math.random().toString(16).replace(/\./g,"")));
  const [pet_id, setPetId] = useState("");
  
  const handleSubmit = (event) => {
    const date = new Date();
    ///checking if user exists
    const userData = fetch("http://localhost:8000/api/pet")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if(data && data.length > 0){
      data.map((item) => {
        // if (item.cust_name === cust_name) {
        //   setErrorMessages({ name: "uname", message: errors.loginMsg });
        //   setIsHome(false);
        //   setIsSubmitted(false);
        //   //alert("user already exists");
        //   return;
        // } else {
          setIsHome(true);
       // }
      });
    }else{
      setIsHome(true);
    }
    })
    console.log("pet_id:::",pet_id);
    const blog = { pet_id,pet_kind, pet_age,pet_weight, pet_sex };


      if (isHome) {
        setIsSubmitted(true);
        fetch("http://localhost:8000/api/pet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("data to enter", data);
            const petId = pet_id;
            const cust_id = location.state.state.cust_id;
            console.log("data to enter::pet_id", pet_id);
            console.log("data to enter::cust_id", cust_id);
            const petRegData = {cust_id,pet_id};
            console.log("petRegData::::",petRegData);
                  fetch("http://localhost:8000/api/petreg", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(petRegData),
                  })
                    .then((response) => {
                      setIsPetRegistered(true);
                      return response.json();
                    })
                    .then((data) => {
                      setIsPetRegistered(true);
                      console.log("data to enter", data);
                    });
          });
      }
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
    if (isHome && isSubmitted) {
    //  setErrorMessages({});
      alert("Account created successfully.");
      // history.push("/", {
      //   replace: true,
      //   state: { userName: cust_name, registeredFlag: "registerFlag" },
      // });
    }
  }, [isSubmitted]);
  // const renderErrorMessage = (name) => {
  //   // name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   //);
  // };
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
              onClick={(e) => {
                handleAppointment(e);
              }}
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

export default PetRegister;
