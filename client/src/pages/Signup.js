import React, { useState } from "react";
import Navigation from '../components/Nav';

import { useMutation } from '@apollo/client';
import { ADD_USER } from "../utils/mutations"; 

import Auth from '../utils/auth';

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);

  //update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  //submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div>
      <Navigation />

      <div className="login">
        <h1>Sign Up</h1>

        <form onSubmit={handleFormSubmit}>
          <TextField
            margin="dense"
            fullWidth
            type="text"
            name="email"
            value={formState.name}
            onChange={handleChange}
            placeholder="Email" 
          />
          <TextField
            margin="dense"
            fullWidth
            type="text"
            name="username"
            value={formState.name}
            onChange={handleChange}
            placeholder="User Name" 
          />
          <TextField
            margin="dense"
            fullWidth
            label="password"
            type="password"
            name="password"
            value={formState.name}
            onChange={handleChange}
            placeholder="Password" 
          />
          <Button sx={{mt:3}} component="button" className="submit-btn" variant="contained" type="submit" onClick={() => { console.log('button clicked')}}>Submit</Button>
          <br></br><br></br>
          <a href="login">Already registered? Log in here.</a>


        </form>
      </div>
    </div>
  );
};

export default Signup;
