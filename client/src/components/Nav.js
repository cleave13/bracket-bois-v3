import React from "react";
import Auth from '../utils/auth';

function Navigation() {
  if (Auth.loggedIn()) {
  return(
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/" onClick={() => Auth.logout()}>Logout</a>
    </div>
  );
    } else {
    return (
    <div className="navbar">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
    </div>
    );
    }   
}


export default Navigation;