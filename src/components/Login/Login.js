import React, { useState } from 'react';
import './Login.css'
import LoginForm from './LoginForm/LoginForm';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

function Login() {

  const adminUser = {
    email: "admin@email.com",
    password: "admin"
  }
  const [user, setUser] = useState ({email: ""});
  const [error, setError] = useState("");
  

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser ({
        email: details.email
      });
    } else {
      console.log("Wrong details");
      setError("Wrong details");
    }
  }
  
  const Continue = () => {
    console.log("Coninue")
  }

  return (
    
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome to Merchy!</h2>
          <Button component={Link} to="/listing">Continue</Button> 
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default Login;
