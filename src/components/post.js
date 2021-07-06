import React from "react";
import { Link } from "react-router-dom";

const Attraction = ({ attraction }) => {
    ////////////////////////
    // Style objects
    ////////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    };
  return (
      <div style={div}>
          <Link to={`/attraction/${attraction.id}`}>
              <h1>{attraction.place}</h1>
          </Link>
            <h2>{attraction.location}</h2>
            <h2>{attraction.went}</h2>
      </div>
  );
};

export default Attraction;