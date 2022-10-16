import React from 'react'
import axios from "axios";
import { useEffect,useState } from "react";
import "../App.css";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


const UpdateTeacher = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const Teacher_ID = location.state.id;

    const [Fname , setFname ] = useState('');
    const [Lname , setLname ] = useState('');
    const [Gender , setGender ] = useState('');
    const [Phone_NO , setPhoneNO ] = useState('');
    const [Grade, setGrade  ] = useState('');
    const [Subject_ID, setSubjectID  ] = useState('');
    const [Email , setEmail ] = useState('');
    const [Password, setPassword] = useState('');

    useEffect(()=>{
        axios.get("http://localhost:3001/teachers/details").then((response) => {
            setFname(response.data[0].Fname);
            setLname(response.data[0].Lname);
            setGender(response.data[0].Gender);
            setPhoneNO(response.data.Phone_NO);
            setSubjectID(response.data[0].Subject_ID);
            setGrade(response.data[0].Grade);
            setEmail(response.data[0].Email);


        })
    },[]);

const Update = async (e) => {
        e.preventDefault();

        const updateTeacher1 = {
            Teacher_ID: Teacher_ID,
            Fname: Fname,
            Lname: Lname,
            Gender: Gender,
            Phone_NO: Phone_NO,
            Grade: Grade,
            Subject_ID: Subject_ID,
            Email: Email,
            Password: Password,
        }

        try {
            await axios.put(`http://localhost:3001/teachers/update/${Teacher_ID}`,updateTeacher)
            .then
            (response => {
                console.log(response);
            })
            navigate('/teachers');
        } catch (error) {
            console.log(error);
        }
    }


  
return (
    
        <form   onSubmit={Update} >
      
          <div className="header-wraper">
            <div className="Registration" >
      
              <h1 className='Topic' >Update</h1>
                    
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
      
                      <label>Subject</label>
                      <select name="Subject_ID"  required value={Subject_ID}  onChange={(e) => setSubjectID(e.target.value)}>
                          <option value="">Select Subject</option>
                          <option  value="1001">Mathematics</option>
                          <option value="1002">Science</option>
                          <option value="1003">English</option>
                          <option value="1004">Sinhala</option>
                          <option value="1005">Tamil</option>
                          <option value="1006">History</option>
                          <option value="1007">Geography</option>
                          <option value="1008">Buddhism</option>
                          
                      </select>
                      
                                              
                      <label>Email</label>
                      <input type="text" placeholder="Enter Email" name="Email" required  
                      value={Email}  onChange={(e) => setEmail(e.target.value)} 
                      />
                      
                      <label>Password</label>
                      <input type="password" placeholder="Enter Password" name="psw" required
                      value={Password} onChange={(e) => setPassword(e.target.value)}
                      />
      
              <button   type="submit">Save Update</button>
            </div>
      
          </div> 
          </form>
        
        );
}

export default UpdateTeacher