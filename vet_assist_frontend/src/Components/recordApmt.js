import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const RecordApmt = (props) => {

    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.state); // result: 'some_value'
      }, [location]);
      
    const apmt_id = location.state.apmt_id;
    const pet_id = location.state.pet_id;
    const pet_kind = location.state.pet_kind;
    const pet_owner_id = location.state.pet_owner_id;
    const apmt_datetime = location.state.apmt_datetime;
    const doc_id = location.state.doc_id;
    const doc_name = location.state.doc_name;
    const consultation_fee = location.state.consultation_fee;
    const apmt = { apmt_id, pet_id, pet_kind, pet_owner_id, apmt_datetime, doc_id, doc_name, consultation_fee };

    console.log(apmt)

    const CreateJson = () => {
        useEffect(() => {
            fetch('http://localhost:8000/api/apmt', 
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(apmt)
            }).then(() => {
                console.log('new apmt added');
                
                alert('new apmt added');
            }).catch(
                (error) => {
                    console.log("error for api call", error)
                  }
            )
        }, []);
    }

    return (
        <div className="create">
            <CreateJson />
        </div>
    );
}

export default RecordApmt;