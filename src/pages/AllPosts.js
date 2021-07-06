import React from "react";
import Attraction from "../components/post"

const AllPosts = (props) => {
  return props.attractions.map((attraction) => <Attraction attraction={attraction} key={attraction.id} />);
};

export default AllPosts;