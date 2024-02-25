import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import homeImage from "../images/mobile.png";
import vetSymbol from "../images/vetsymbol.png";
import Footer from "./Footer";

function PhysicianAppointment(props) {
  const location = useLocation();
  const history = useHistory();
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
      console.log(location.pathname); // result: '/secondpage'
      console.log(location.state); // result: 'some_value'
  }, [location]);
  console.log("phusician location:::",location.state);
  const [cust_id, setCustId] = useState(location.state.state.cust_id);
  const [pet_id, setPetId] = useState(location.state.state.pet_id);
  const [apmt_datetime, setDate] = useState("");
  const [consultation_fee, setFee] = useState("");
 // const [time, setTime] = useState("");
  const [department, setDepartment] = useState("");
  const [physician, setPhysician] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = fetch("http://localhost:8000/api/petreg")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(JSON.stringify(data));
        if (data && data.length > 0) {
          let newArr = data.map((item) => {
            if (userData) {
              
              if (item.cust_id === cust_id) {
                // Invalid password
                setPetId(item.pet_id);
                console.log("Inside Pet Id1::::",item.pet_id);
                console.log("Inside Pet Id2::::",pet_id);
               
              }
            } 
          });

        } 
      })
      .catch((error) => {
        alert("There was a problem with the request.");
      });
  


    const pet_owner_id = cust_id;
    //const doctor_id = cust_id;
    const doctor_id = 15;
    const blog = { pet_id,pet_owner_id, apmt_datetime,doctor_id, department,consultation_fee };
    
        setIsSubmitted(true);
        fetch("http://localhost:8000/api/apmt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("data to enter", data);

      })

  }

 
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
	            <input class="textbox-19" type="text" placeholder="Date" value={apmt_datetime}
              onChange={(e) => setDate(e.target.value)} required/>
	            <span class="focus-border-19"><i></i></span>
          </div>
         
        {/* <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="Time" value={time}
              onChange={(e) => setTime(e.target.value)} required/>
	          <span class="focus-border-19"><i></i></span> 
         </div> */}
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="Department" value={department}
              onChange={(e) => setDepartment(e.target.value)} required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
         <div class="col-19">
	          <input class="textbox-19" type="text" placeholder="ConsultationFee" value={consultation_fee}
              onChange={(e) => setFee(e.target.value)} required/>
	          <span class="focus-border-19"><i></i></span> 
         </div>
         <div class="col-19">
              <select class="textbox-19" id="physician" name="physician" value={physician}
              onChange={(e) => setPhysician(e.target.value)} required>
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
              onClick={(e) => {
                handleSubmit(e);
              }}
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

export default PhysicianAppointment;
