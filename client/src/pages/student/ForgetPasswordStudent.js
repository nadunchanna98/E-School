import React ,{useState ,useEffect } from 'react';
import axios from "axios";
import "../../App.css";
import {useNavigate} from 'react-router-dom';

const ForgetPasswordStudent = () => {

  const [email, setEmail] = useState('')
  const [loginStatus,setLoginStatus] = useState('Enter your email to reset your password');

const handleSubmit =  async (e) => {
    e.preventDefault();

    await axios.get(`http://localhost:3001/student/forgetpasword /${email}`).then((response) => {
      if(response.data.length > 0){
          //emall correct then send email for reset password
          console.log("email correct");
          setLoginStatus("Check your email to reset your password");

      }else{
        console.log("email incorrect");
        setLoginStatus("email incorrect");
      }
    })
      
    }


  return (

    <form onSubmit={handleSubmit}   >
    <div className='header-wraper'>
      <div className="login" >

        <h1 >Forget Password !!</h1>

              <div className='loginform'>

                  <label>Email Address</label>

                     <input type="text" placeholder="Enter Email" name="email" required  
                    value={email}  onChange={(e) => setEmail(e.target.value)} 
                    /> 
                 
                        <button   type="submit" >Send Reset Code</button> 

            </div>

            <div>
            <h3 className='status'>{loginStatus}</h3>
            </div>
       
        
          </div>
       
    </div>  
    </form>

    
  )
}

export default ForgetPasswordStudent