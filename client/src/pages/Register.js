//rfce
import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";


function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Register = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3001/register', {  
          email: email,
          password: password,
        })
        
    } catch (error) {
   console.log(error);
    }
}
  

  return (
   

  <form  onSubmit={Register} >
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
        <button   type="submit">Register</button>
      </div>

    </div> 
    </form>
  
  );
}

export default Register;