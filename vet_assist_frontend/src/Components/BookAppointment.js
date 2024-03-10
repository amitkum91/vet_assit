import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "../App.css";
import homeImage from "../images/mobile.png";
import vetSymbol from "../images/vetsymbol.png";
import Footer from "./Footer";
import RecordApmt from "./recordApmt";

function BookAppointment(props) {
  const dateObj = new Date();

  const slots = ['11 AM', '12 PM', '1 PM', '5 PM', '6 PM', '7 PM']

  function date_format(today) {
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    return yyyy + "-" + mm + "-" + dd;
  }

  var minDate = date_format(dateObj);
  var maxDate = date_format(new Date(dateObj.setDate(dateObj.getDate() + 5)));


  const location = useLocation();
  const history = useHistory();
  const [petId, setPetId] = useState([]);
  const [petKind, setPetKind] = useState([]);
  const [docDtl, setDocDtl] = useState([]);
  const [apmtDt, setApmtDt] = useState(new Date());
  const [slot, setSlot] = useState('')

  const [kind_of_pet, setKindOfPet] = useState("");
  const [doc_detail, setDocDetail] = useState("");

  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    console.log(location.state); // result: 'some_value'
  }, [location]);

  const FetchPetId = () => {
    fetch("http://localhost:8000/api/petreg", {
      method: "GET",
      cust_id: location.state.cust_id,
    })
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setPetId([actualData]);
        console.log(petId);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    FetchPetId();
  }, []);

  const FetchPetKind = () => {
    fetch("http://localhost:8000/api/pet", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => data.map((pet) => `${pet.pet_id}|${pet.pet_kind}`))
      .then((actualData) => {
        console.log(actualData);
        setPetKind(actualData);
        console.log(petKind);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    FetchPetKind();
  }, []);

  const FetchDocDtl = () => {
    fetch("http://localhost:8000/api/docreg", { method: "GET" })
      .then((response) => response.json())
      .then((dtl1) =>
        dtl1.map((dtl) => `${dtl.doc_id}|${dtl.doc_name}|${dtl.address}|500`)
      )
      .then((actualData) => {
        console.log(actualData);
        setDocDtl(actualData);
        console.log(docDtl);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    FetchDocDtl();
  }, []);

  // var doc_detail = docDtl.map((dtl) =>
  // `${dtl.doc_id}|${dtl.doc_name}|${dtl.address}|${dtl.consultation_fee}`)

  //var pet_kind_arr = petKind//.filter((pet) => petId.includes(pet.pet_id)).map((pet) => [pet.pet_id, pet.pet_kind])

  return (
    <div className="header">
      <img src={homeImage} class="container_login" alt="Norway" />
      <div className="loginbox">
        <img src={vetSymbol} className="container_login1" alt="Norway" />

        <div className="content_section">
          <div className="form-container">
            <div class="col-19">
              <label>Appointment Date</label>
              <input
                class="textbox-19"
                type="date"
                min={minDate}
                max={maxDate}
                value={apmtDt}
                // readonly
                onChange={(e) => setApmtDt(e.target.value)}
              />
              <span class="focus-border-19">
                <i></i>
              </span>
            </div>

            <div class="col-19">
              <label>Select Slot</label>
              <select
                type="text"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
              >
                <option>--Choose--</option>
                {slots.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>

              <span class="focus-border-19">
                <i></i>
              </span>
            </div>

            <div class="col-19">
              <label>Select Pet</label>
              <select
                type="text"
                value={kind_of_pet}
                onChange={(e) => setKindOfPet(e.target.value)}
              >
                <option>--Choose--</option>
                {petKind.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>

              <span class="focus-border-19">
                <i></i>
              </span>
            </div>

            <div class="col-19">
              <label>Select Doctor</label>
              <select
                type="text"
                value={doc_detail}
                onChange={(e) => setDocDetail(e.target.value)}
              >
                <option value="">--Choose--</option>
                {docDtl.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div class="col-19">
              <label>Consultation Fee</label>
              <input
                class="textbox-19"
                type="text"
                value={doc_detail.split("|")[3]}
              />
              <span class="focus-border-19">
                <i></i>
              </span>
            </div>

            <div className="button-container">
              <button
                id="register"
                class="btn btn-primary btn-sm"
                type="submit"
                onClick={(e) =>
                  history.push({
                    pathname: "/rcrdApmt",
                    state: {
                      apmt_id: Date.now(),
                      pet_id: kind_of_pet.split("|")[0],
                      pet_kind: kind_of_pet.split("|")[1],
                      pet_owner_id: location.state.cust_id,
                      apmt_datetime: `${apmtDt}, ${slot}`,
                      doc_id: doc_detail.split("|")[0],
                      doc_name: doc_detail.split("|")[1],
                      consultation_fee: doc_detail.split("|")[3],
                    },
                  })
                }
              >
                Submit Appointment
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

export default BookAppointment;
