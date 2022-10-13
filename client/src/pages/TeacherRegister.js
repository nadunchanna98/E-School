import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";


function TeacherRegister() {

  const [Fname , setFname ] = useState('');
  const [Lname , setLname ] = useState('');
  const [Gender , setGender ] = useState('');
  const [PhoneNO , setPhoneNO ] = useState('');
  const [Grade, setGrade  ] = useState('');
  const [SubjectID, setSubjectID  ] = useState('');
  const [Email , setEmail ] = useState('');
  const [Password, setPassword] = useState('');
//teacher ID did not take.IT want to make auto generate

  const Register = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:3001/register/teacher', {  
            Fname: Fname,
            Lname: Lname,
            Gender: Gender,
            PhoneNO: PhoneNO,
            Grade: Grade,
            SubjectID: SubjectID,
            Email: Email,
            Password: Password,
        })
        
    } catch (error) {
   console.log(error);
    }
}
  
  return (
   

  <form   onSubmit={Register} >

    <div className="header-wraper">
      <div className="TeacherRegistration" >

        <h1>Registration</h1>
                <div className="form-group"></div>
                 <label>First Name</label>
                <input type="text" placeholder="Ruvindya" name="Fname" required  
                value={Fname}  onChange={(e) => setFname(e.target.value)} 
                />
                
                <label>Last Name</label>
                <input type="text" placeholder="Sachinthani" name="Lname" required
                value={Lname} onChange={(e) => setLname(e.target.value)}
                />

                <label>Sexuality</label>
                <input type="text" placeholder="Male/Female" name="Gender" required  
                value={Gender}  onChange={(e) => setGender(e.target.value)} 
                />
                
                <label>Phone Number</label>
                <input type="text" placeholder="0701111111" name="PhoneNO" required
                value={PhoneNO} onChange={(e) => setPhoneNO(e.target.value)}
                />

                <label>Grade</label>
                <input type="text" placeholder="Grade 5" name="Grade" required    
                value={Grade}  onChange={(e) => setGrade(e.target.value)}   
                />

                <label>Subject</label>
                <input type="text" placeholder="English" name="SubjectID" required
                value={SubjectID} onChange={(e) => setSubjectID(e.target.value)}
                />
                                        
                <label>Email</label>
                <input type="text" placeholder="Enter Email" name="Email" required  
                value={Email}  onChange={(e) => setEmail(e.target.value)} 
                />
                
                <label>Password</label>
                <input type="password" placeholder="Enter Password" name="psw" required
                value={Password} onChange={(e) => setPassword(e.target.value)}
                />

        <button   type="submit">Register</button>
      </div>

    </div> 
    </form>
  
  );
}

export default TeacherRegister;