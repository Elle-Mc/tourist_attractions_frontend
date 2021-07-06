import React from "react";
import { Link } from "react-router-dom";

// destructure the props to get our attraction, including router prop match
const SingleAttraction = ({ attractions, match }) => {
  const id = parseInt(match.params.id); //gets the ID from the URL param
  const attraction = attractions.find((attraction) => attraction.id === id);

  ////////////////////
  //Styles
  ////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  }

  return (
    <div style={div}>
      <h1>{attraction.place}</h1>
      <h2>{attraction.location}</h2>
      <h2>{attraction.went}</h2>
      <button onClick={(event) => edit(attraction)}>Edit</button>
      <button onClick={(event) => deleteAttraction(attraction)}>Delete</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
   );
};

export default SingleAttraction;