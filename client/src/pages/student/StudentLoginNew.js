import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import { Formik } from "formik";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';


const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
    
  password: Yup.string()
    .required("Password is a required field")
    .min(3, "Password must be at least 8 characters"),
});




const StudentLoginNew = () => {

  const navigate = useNavigate();
  const [loginStatus,setLoginStatus] = useState('ENTER YOUR CREDENTIALS');

  const onSubmit =(data) =>{

    try {

    axios.post('http://localhost:3001/login/student',data)
     
      .then((response) => {
  
        if(response.data.message){
          setLoginStatus(response.data.message);
         
        }
        else{
         // setLoginStatus(response.data[0].email);
          navigate("/studentDashboard" ,{ state: {email : data.email }} );
        }
  
      });
  }catch (error) {
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
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}

      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit }  
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (

          <div className='header-wraper' >
          <div className="login">

          <h1>Let's Learn Something</h1>

            <div className='loginform'>


              <form noValidate onSubmit={handleSubmit}>
           
              <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
               
                 <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>

                </form>
                </div>

                <h5>Don't have an account? <a href="/register/student">Sign Up</a></h5>
                       
               <h5>Forget <a href="/forgetPasswordStudent">password?</a></h5>

              
          </div>

          <h3 className='status'>{loginStatus}</h3>
        </div>
        )}
      </Formik>
    </>
  );
}

export default StudentLoginNew



//https://github.com/christerjohansson/react-authentication-page-template

//https://www.youtube.com/watch?v=6sLh_5iFnFc&ab_channel=ScalableScripts