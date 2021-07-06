import React from "react";
import Attraction from "../components/post"

const AllAttractions = (props) => {
  return props.attractions.map((attraction) => <Attraction attraction={attraction} key={attraction.id} />);
};

export default AllAttractions;