import React, { useState } from "react";

// destructure props, including router prop history
const Form = ({ initialAttraction, handleSubmit, buttonLabel, history }) => {
  //////////////
  // Form data state
  /////////////
  const [formData, setFormData] = useState(initialAttraction);

  //////////////
  // Functions
  /////////////
  //Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };

  //Function to run when form is submitted
  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    history.push("/");
  };
  
  //Our form, an input for the subject and details and a submit button
  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.place}
        name="place"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.location}
        name="location"
      />
      <input 
        type="text"
        onChange={handleChange}
        value={formData.went}
        name="went"
      />    
    </form>
  );
};

export default Form;