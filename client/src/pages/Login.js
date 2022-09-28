//rfce
import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const Login = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3001/login', {  
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
        })
        
    } catch (error) {
   console.log(error);
    }
}
  

  return (
   
    
  <form  onSubmit={Login} >
    <div className="App">
      <div className="login" >
        <h1>Login</h1>
        <label>Email</label>
          <input type="text" placeholder="Enter Email" name="email" required  
          value={email}  onChange={(e) => setEmail(e.target.value)} 
          />
        <label>Password</label>
          <input type="password" placeholder="Enter Password" name="psw" required
          value={password} onChange={(e) => setPassword(e.target.value)}
          />
        <button   type="submit">Login</button>
      </div>

    </div> 
    </form>
  
  );
}

export default Login;