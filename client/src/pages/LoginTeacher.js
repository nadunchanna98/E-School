import React ,{useState } from 'react';
import axios from "axios";
import "../App.css";


function LoginTeacher() {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus,setLoginStatus] = useState('ENTER YOUR CREDENTIALS');


  const handleSubmitTeacher =  async (e) => {
    e.preventDefault();

       try {

        await axios.post('http://localhost:3001/login/teacher', {  
          email: email,
          password: password,
          
        })
        .then((response) => {

          if(response.data.message){
            setLoginStatus(response.data.message);
            
          }
          else{
            setLoginStatus(response.data[0].email);
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
   
    
  <form onSubmit={handleSubmitTeacher}   >
    <div >
      <div className="login" >

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

                        <button   type="submit" >Login</button> 
             

            </div>
            <h1>{loginStatus}</h1>
          </div>
       
    </div>  
    </form>
  
  );
}

export default LoginTeacher;