import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {

    ////////////////////////
    // Style objects
    ////////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "50%",
    };

    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.place}</h1>
        </Link>
        <h2>{post.location}</h2>
        <h2>{post.went}</h2>
    </div>
};

export default Post;