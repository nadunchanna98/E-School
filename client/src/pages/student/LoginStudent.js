import React ,{useState , useEffect } from 'react';
import axios from "axios";
import "../../App.css";
import {useNavigate} from 'react-router-dom';

function LoginStudent() {



  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus,setLoginStatus] = useState('ENTER YOUR CREDENTIALS');

const email1 = email;

  const handleSubmitStudent =  async (e)=>{
    
    e.preventDefault();

       try {
        await axios.post('http://localhost:3001/login/student', {  
          email: email,
          password: password,
        })
        .then((response) => {

          if(response.data.message){
            setLoginStatus(response.data.message);
           
          }
          else{
           // setLoginStatus(response.data[0].email);
            navigate("/studentDashboard" ,{ state: {email : email1 }} );
          }

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
   
    
  <form onSubmit={handleSubmitStudent}   >
    <div className='header-wraper' >
      <div className="login" >

        <h1>Let's Learn Something</h1>

              <div className='loginform'>

                                <label>Email</label>
                                  <input type="text" placeholder="Enter Email" name="email" required  
                                  value={email}  onChange={(e) => setEmail(e.target.value)} 
                                  />
                                <label>Password</label>
                                  <input type="password" placeholder="Enter Password" name="psw" required
                                  value={password} onChange={(e) => setPassword(e.target.value)}
                                  />


                        <button   type="submit" >Login</button> 
        

                       <h5>Don't have an account? <a href="/register/student">Sign Up</a></h5>
                       
                        <h5>Forget <a href="/forgetPasswordStudent">password?</a></h5>


             

            </div>
            <h3 className='status'>{loginStatus}</h3>
          </div>
       
    </div>  
    </form>
  
  );
}

export default LoginStudent;