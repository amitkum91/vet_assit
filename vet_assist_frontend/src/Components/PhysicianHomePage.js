import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";
import vetSymbol from "../images/vetsymbol.png";

function PhysicianHomePage(props) {
  const location = useLocation();
  const history = useHistory();
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
      console.log(location.pathname); // result: '/secondpage'
      console.log(location.state); // result: 'some_value'
  }, [location]);
  console.log("PhysicianHomePage location:::",location.state);
  const [pet_id, setPetId] = useState("");
 
  const [appointment_details, setAppointmentDetails] = useState("");

  const userData = fetch("http://localhost:8000/api/apmt")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(JSON.stringify(data));
    if (data && data.length > 0) {
      let newArr = data.map((item) => {
        if (userData) {
          console.log("Outside apmt Id1::::",item.pet_owner_id);
          console.log("Outside loc state Id1::::",location.state.state.cust_id);
          
          if (item.pet_owner_id === location.state.state.cust_id.toString()) {
            // Invalid password
            setPetId(item.pet_owner_id);
            setAppointmentDetails(item.apmt_datetime);
            console.log("Inside apmt Id1::::",item.pet_id);
            console.log("Inside apmt Id2::::",pet_id);
           
          }
        } 
      });

    } 
  })
  .catch((error) => {
    alert("There was a problem with the request.");
  });
  return (
<div className="header-phyHomePage">
<div className="loginbox-physician1">
  <img src={vetSymbol} className="container_login1" alt="Norway"/>
</div>
<div className="loginbox-payment1">
  
        <span>
             <strong>PET ID</strong>
             <h6>{pet_id}</h6>
        </span>
</div>
<div className="loginbox-physician2">
        <span>
             <strong>APPOINTMENT</strong>
             <h6>{appointment_details}</h6>
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

export default PhysicianHomePage;
