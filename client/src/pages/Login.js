import React ,{useState } from 'react';
import axios from "axios";
import "../App.css";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import Header from '../components/layout/Header';
import Navbar from '../components/layout/navigation/Navbar';
import SlideShare from './SlideShare';


function Login() {

  const navigate = useNavigate();
const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus,setLoginStatus] = useState('ENTER YOUR CREDENTIALS');


  const handleSubmitTeacher =  async (e) =>{
    e.preventDefault();

       try {
        await axios.post('http://localhost:3001/login/teacher', {  
          email: email,
          password: password,
        })
        .then((response) => {

          if(response.data.message){
            setLoginStatus(response.data.message); }
          else{
            setLoginStatus(response.data[0].email);
          }

        
          navigate("/TeacherDashboard");

        })
        
    } catch (error) {
        if(error.response.data.message){
          setLoginStatus(error.response.data.message);
        }
        else{
          setLoginStatus(error.response.data[0].email);
        }


   console.log(error);
    }
  
  }

  const handleSubmitStudent =  async (e) =>{
    e.preventDefault();

       try {
        await axios.post('http://localhost:3001/login/student', {  
          email: email,
          password: password,
        })
        .then((response) => {

          if(response.data.message){
            setLoginStatus(response.data.message); }
          else{
            setLoginStatus(response.data[0].email);
          }


          navigate("/StudentDashboard");

        })
        
    } catch (error) {
        if(error.response.data.message){
          setLoginStatus(error.response.data.message);
        }
        else{
          setLoginStatus(error.response.data[0].email);
        }


   console.log(error);
    }
  
  }


  return (
   
    
  <form   >
    <div className="App">
      <div className="login" >

        <div>  
          <Navbar/>
           <Header/>
           <SlideShare/>
           </div>



        <h1>Login</h1>

        <div className='loginform'>
        <label>Email</label>
        
          <input type="text" placeholder="Enter Email" name="email" required  
          value={email}  onChange={(e) => setEmail(e.target.value)} 
          />
        <label>Password</label>
          <input type="password" placeholder="Enter Password" name="psw" required
          value={password} onChange={(e) => setPassword(e.target.value)}
          />

       {/* <button   type="submit" onSubmit={Login}  >Login</button> */}

        <button onClick={handleSubmitTeacher }> Login As a Teacher </button > 
        <button onClick={handleSubmitStudent}> Login As a Student </button >

      </div>

          </div>
       <h1>{loginStatus}</h1>
    </div>  
    </form>
  
  );
}

export default Login;