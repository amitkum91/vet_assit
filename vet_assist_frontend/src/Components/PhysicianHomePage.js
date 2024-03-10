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
  console.log("PhysicianHomePage location:::", location.state);
  const [pet_id, setPetId] = useState([]);

  const [appointment_details, setAppointmentDetails] = useState("");

  const userData = useEffect(
    () =>
      fetch("http://localhost:8000/api/apmt", {
        method: "GET",
        doc_id: location.state.cust_id,
      })
        .then((response) => {
          return response.json();
        })
        .then((actualData) => {
          console.log(actualData);
          setPetId(actualData);
          console.log(pet_id);
        })
        .catch((error) => {
          alert("There was a problem with the request.");
        }),
    []
  );

  var dataTable = document.querySelector("#dataTable");

  pet_id.forEach((item) => {
    var row = dataTable.insertRow();
    row.insertCell(0).innerHTML = item.apmt_id;
    row.insertCell(1).innerHTML = item.pet_id;
    row.insertCell(2).innerHTML = item.pet_kind;
    row.insertCell(3).innerHTML = item.pet_owner_id;
    row.insertCell(4).innerHTML = item.apmt_datetime;
    row.insertCell(5).innerHTML = item.doc_id;
    row.insertCell(6).innerHTML = item.doc_name;
    row.insertCell(7).innerHTML = item.consultation_fee;
  });

  return (
    <div className="header-phyHomePage">
      <div className="loginbox-physician1">
        <img src={vetSymbol} className="container_login1" alt="Norway" />
        <table id="dataTable" border="1">
          <thead id="tableHead">
            <tr id="tableRow">
              <th>Apmt ID</th>
              <th>Pet ID</th>
              <th>Pet Kind</th>
              <th>Pet Owner ID</th>
              <th>Apmt DateTime</th>
              <th>Doc Id</th>
              <th>Doc Name</th>
              <th>Consultation Fee</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="loginbox-payment1">
      </div>
    </div>
  );
}

export default PhysicianHomePage;
