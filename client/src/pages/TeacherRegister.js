import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";
import { v4 as uuid } from 'uuid';


function TeacherRegister() {

  const [Fname , setFname ] = useState('');
  const [Lname , setLname ] = useState('');
  const [Gender , setGender ] = useState('');
  const [PhoneNO , setPhoneNO ] = useState('');
  const [Grade, setGrade  ] = useState('');
  const [SubjectID, setSubjectID  ] = useState('');
  const [Email , setEmail ] = useState('');
  const [Password, setPassword] = useState('');



  const Register = async (e) => {
    e.preventDefault();

    var err = false;

    const newTeacher = {  
        Teacher_ID: uuid(),
        Fname: Fname,
        Lname: Lname,
        Gender: Gender,
        PhoneNO: PhoneNO,
        Grade: Grade,
        SubjectID: SubjectID,
        Email: Email,
        Password: Password,
    }
    
    try {
        await axios.post('http://localhost:3001/teachers/register', newTeacher); 
        
    } catch (error) {

   console.log(error);

             err = true;

            if( SubjectID === '' ){
                alert("Please Select The Subject ");
            }
            else if( Grade === '' ){
                alert("Please Select The Grade ");
            }
            else{
                alert("Unsuccessful Registration");
            }
    }
    
        if(err === false)
        {  alert("Successful Registration");
      }
       
    
    
    setFname("");
    setLname("");
    setGender("");
    setSubjectID("");
    setPhoneNO("");
    setGrade("");
    setEmail("");
    setPassword("");
}
  
  return (
   

  <form   onSubmit={Register} >

    <div className="header-wraper">
      <div className="Registration" >

        <h1 className='Topic' >Registration</h1>
                <div className="form-group"></div>

                

                 <label>First Name</label>
                <input type="text" placeholder="Ruvindya"  name="Fname" required  
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
                <select name="Grade"  required value={Grade}  onChange={(e) => setGrade(e.target.value)}>
                    <option value="">Select Grade</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    
                </select>

                <label>Subject</label>
                <select name="SubjectID"  required value={SubjectID}  onChange={(e) => setSubjectID(e.target.value)}>
                    <option value="">Select Subject</option>
                    <option  value="1001">Mathematics</option>
                    <option value="1002">Science</option>
                    <option value="1003">English</option>
                    <option value="1004">Sinhala</option>
                    <option value="1005">Tamil</option>
                    <option value="1006">History</option>
                    <option value="1007">Geography</option>
                    <option value="1008">Buddhism</option>
                    <option value="1009">Music</option>
                    <option value="1010">Drama</option>
                    <option value="1011">Art</option>
                    <option value="1012">Dancing</option>
                    
                </select>
                
                                        
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