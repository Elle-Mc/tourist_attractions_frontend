//Import components
import AllAttractions from "./pages/AllAttractions"
import SingleAttraction from "./pages/SingleAttraction"
import Form from "./pages/Form"

// Import reach and hooks 
import React, { useState, useEffect } from "react";

// Import components from React Router
import {Route, Switch } from "react-router-dom";

function App(props) {

  /////////////////////
  //Style 
  /////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  }

  /////////////////////
  //State and other variables
  /////////////////////

  //API URL
  const url = "https://tourist-attractions-em.herokuapp.com/attractions/";

  // State to hold the attractions
  const [attractions, setAttractions] = useState([]);

  /////////////////////
  //Functions
  /////////////////////

  //Funcation to get the list of attractions from API
  const getAttractions = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAttractions(data);
  }


  /////////////////////
  //useEffects
  /////////////////////

  /////////////////////
  //returned JSX
  /////////////////////

  return (
    <div className="App">
      <h1 style={h1}>My Tourist Attractions</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllAttractions {...routerProps} attractions={attractions} />}/>
        <Route
          path="/attractions/:id"
          render={(routerProps) => (
            <SingleAttraction {...routerProps} attractions={attractions} /> )} />
        <Route 
          path="/new"
          render={(routerProps) => <Form {...routerProps} />}
        />
        <Route 
          path="/edit"
          render={(routerProps) => <Form {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
