//Import components
import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost"
import Form from "./pages/Form"

// Import react and hooks 
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {

  /////////////////////
  //Style 
  /////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  }

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
  }

  /////////////////////
  //State and other variables
  /////////////////////

  //API URL
  const url = "https://tourist-attractions-em.herokuapp.com/attractions/";

  // State to hold the attractions
  const [posts, setPosts] = useState([]);

  //An object that represents a null attraction
  const nullAttraction = {
    place: "",
    location: "",
    went: "",
  };

  //Const state to hold attraction to edit it
  const [targetAttraction, setTargetAttraction] = useState(nullAttraction);

  /////////////////////
  //Functions
  /////////////////////

  //Function to get the list of the Attractions from API
  const getAttractions = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  }

  //Function to add attraction from form data
  const addAttractions = async (newAttraction) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAttraction),
    });
    
    //get updated list of attractions
    getAttractions();
  };

  //Function to select attraction to edit
  const getTargetAttraction = (attraction) => {
    setTargetAttraction(attraction);
    props.history.push("/edit");
  };

  //Function to edit attractions on form submission
  const updateAttraction = async (attraction) => {
    const response = await fetch(url + attraction.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attraction),
    });

    //get updated list of attractions
    getAttractions();
  }

  //Function to delete attraction on form submission
  const deleteAttraction = async (attraction) => {
    const response = await fetch(url + attraction.id + "/", {
      method: "delete",
    });

    //get updated list of attractions
    getAttractions();
    props.history.push("/");
  };

  /////////////////////
  //useEffects
  /////////////////////

  //useEffect to get list of attractions when the page loads
  useEffect(() => {
    getAttractions();
  }, []);

  /////////////////////
  //returned JSX
  /////////////////////

  return (
    <div className="App">
      <h1 style={h1}>My Tourist Attractions</h1>
      <Link to="/new"><button style={button}>Create New Attraction</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllPosts posts={posts} {...routerProps} />}/>
        <Route
          path="/post/:id"
          render={(routerProps) => (
            <SinglePost
            {...routerProps} 
            posts={posts}
            edit={getTargetAttraction} 
            deleteAttraction={deleteAttraction}
            /> 
          )} 
        />
        <Route 
          path="/new"
          render={(routerProps) => (
            <Form
              {...routerProps}
              initialAttraction={nullAttraction}
              handleSubmit={addAttractions}
              buttonLabel="Create attraction"
            />
          )}
        />
        <Route 
          path="/edit"
          render={(routerProps) => (
            <Form
              {...routerProps}
              initialAttraction={targetAttraction}
              handleSubmit={updateAttraction}
              buttonLabel="Update attraction"
          />
        )}
        />
      </Switch>
    </div>
  );
}

export default App;
