import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";
import { v4 as uuid } from 'uuid';

function StudentRegister() {

  const [Fname , setFname ] = useState('');
  const [Lname , setLname ] = useState('');
  const [Gender , setGender ] = useState('');
  const [Phone_NO , setPhoneNO ] = useState();
  const [Grade, setGrade  ] = useState('');
  const [Bdate, setBdate  ] = useState();
  const [Address, setAddress  ] = useState('');
  const [Email , setEmail ] = useState('');
  const [Password, setPassword] = useState('');



  const Register =  (e) => {
    e.preventDefault();

    console.log(Fname)

    var err = false;

    const newStudent = {  
        Student_ID: uuid(),
        Fname: Fname,
        Lname: Lname,
        Gender: Gender,
        Phone_NO: Phone_NO,
        Grade: Grade,
        Bdate: Bdate,
        Address: Address,
        Email: Email,
        Password: Password,
    }
    
    try {
         axios.post('http://localhost:3001/students/register', newStudent);    

    } catch (error) {

   console.log(error);

             err = true;

           if( Grade === '' ){
                alert("Please Select The Grade ");
                
            }
            else{
                alert("Unsuccessful Registration");
            }
    }
    
        if(err === false)
        {  //alert("Successful Registration");
        }
       
  
    setFname("");
    setLname("");
    setGender("");
    setAddress("");
    setBdate("");
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
                <input type="text" placeholder="0701111111" name="Phone_NO" required
                value={Phone_NO} onChange={(e) => setPhoneNO(e.target.value)}
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

                <label>Birth Day</label>
                <input type="date"  name="Bdate" required
                value={Bdate} onChange={(e) => setBdate(e.target.value)}
                />

                <label>Home Address</label>
                <input type="text" placeholder="234/2 , Nuwaraeliya , Srilanka" name="Address" required
                value={Address} onChange={(e) => setAddress(e.target.value)}
                />
                
                                        
                <label>Email</label>
                <input type="text" placeholder="Enter Email" name="Email" required  
                value={Email}  onChange={(e) => setEmail(e.target.value)} 
                />
                
                <label>Password</label>
                <input type="password" placeholder="Enter Password" name="psw" required
                value={Password} onChange={(e) => setPassword(e.target.value)}
                />

        <button type="submit">Register</button>
      </div>

    </div> 
    </form>
  
  );
}

export default StudentRegister;