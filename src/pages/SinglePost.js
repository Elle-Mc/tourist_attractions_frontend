import React from "react";
import { Link } from "react-router-dom";

// destructure the props to get our attraction, including router prop match
const SinglePost = ({ posts, match, edit, deleteAttraction, history }) => {
  const id = parseInt(match.params.id); //gets the ID from the URL param
  const post = posts.find((post) => {
    return post.id === id
  })

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
      <h1>{post.place}</h1>
      <h2>{post.location}</h2>
      <h2>{post.went}</h2>
      <button onClick={(event) => edit(post)}>Edit</button>
      <button onClick={(event) => deleteAttraction(post)}>Delete</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
   );
};

export default SinglePost;