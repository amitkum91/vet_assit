import { useEffect } from "react";

const DocApmt = (props) => {
  const GetApmt = () => {
    useEffect(() => {
      fetch("http://localhost:8000/api/apmt", {
        method: "GET",
        pet_owner_id: location.state.cust_id,
      })
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);
  };

  return (
    <div className="create">
      <GetApmt />
    </div>
  );
};

export default DocApmt;
