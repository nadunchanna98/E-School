//rfce
import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../App.css";
import { Formik } from "formik";
import * as Yup from "yup";


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
   

    <div className="App">
      <div className="registration" >
        <h1>Registration</h1>
        <label>Email</label>
          <input type="text" placeholder="Enter Email" name="email" required  
          value={email}  onChange={(e) => setEmail(e.target.value)} 
          />
        <label>Password</label>
          <input type="password" placeholder="Enter Password" name="psw" required
          value={password} onChange={(e) => setPassword(e.target.value)}
          />
        <button type="submit">Register</button>
      </div>

      <div className="login" >
        <h1>Login</h1>
        <label>Email</label>
        <input type="text" placeholder="Enter Email" name="email" required />
        <label>Password</label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <button type="submit">Login</button>
      </div>
    </div>

    

  );
}

export default Login;