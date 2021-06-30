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




  return <h1>SingleAttraction</h1>;
};

export default SingleAttraction;