import React from 'react'
import { useLocation ,useNavigate } from "react-router-dom";
import  { useState } from 'react';
import "../../App.css";
import axios from "axios";
import { useEffect } from "react";
import Time from 'react-time-format';

const StuSubjctInfoAndRegInfo = () => {

  const location = useLocation();
  const Student_ID = location.state.Student_ID;

  const [Fname , setFname ] = useState('');
  const [Lname , setLname ] = useState('');
  const [Gender , setGender ] = useState('');
  const [Phone_NO , setPhone_NO ] = useState();
  const [Grade, setGrade  ] = useState('');
  const [Bdate, setBdate  ] = useState();
  const [Address, setAddress  ] = useState('');
  const [Email , setEmail ] = useState('');

  const [SubjectDetails, setSubjectDetails] = useState([]);


  useEffect(()=>{
    axios.get( `http://localhost:3001/students/moredetails/${Student_ID}`).then((response,) => {

      setFname(response.data[0].Fname);
          setLname(response.data[0].Lname);
          setGender(response.data[0].Gender);
          setPhone_NO(response.data[0].Phone_NO);
          setGrade(response.data[0].Grade);
          setBdate(response.data[0].Bdate);
          setAddress(response.data[0].Address);
          setEmail(response.data[0].Email);
          setSubjectDetails(response.data);
          

    })
},[]);



  return (
    <div >


    <div className="welocme">
            <h1>My Details and my Subjects Details</h1>
     </div>

        
            <div className='studentTable'>



                <table>
                        <tr>
                            <td className='columnName'><h3>Name</h3></td>
                            <td className='columnName'><h3>Grade</h3></td>
                            <td className='columnName'><h3>Address</h3></td>
                            <td className='columnName'> <h3>Gender</h3></td>
                            <td className='columnName'><h3>Bdate</h3></td>
                            <td className='columnName'><h3>Phone number</h3></td>
                            <td className='columnName'><h3>Email Address</h3></td>
                        
                            
                        </tr>

                        
                        <tr >
                            <td className='columnData'>{Fname} {Lname}</td> 
                            <td className='columnData'>{Grade}</td>
                            <td className='columnData'>{Address}</td>
                            <td className='columnData'>{Gender}</td>

                            <td className='columnData' >
                               <Time value={Bdate} format="YYYY-MM-DD" />
                             </td>
                         

                            <td className='columnData'>{Phone_NO}</td>
                            <td className='columnData'>{Email}</td>
                          

                          
                        </tr>

                      
                </table>


                <table>
                                <tr>
                                    <td className='columnName'><h3>Subject ID</h3></td>
                                    <td className='columnName'><h3>Subject Name</h3></td>
                                    <td className='columnName'><h3>Grade</h3></td>
                                    <td className='columnName'><h3>Total Chapters</h3></td>
                                    <td className='columnName'><h3>Total Assignments</h3></td>
                               

                                </tr>

                                {SubjectDetails.map((value,key)=>(
                                <tr key={key}>
                                    <td className='columnData'>{value.Subject_ID}</td> 
                                    <td className='columnData'>{value.Subject_Name}</td> 
                                    <td className='columnData'>{value.Grade}</td> 
                                    <td className='columnData'>{value.Total_Chapters}</td>
                                    <td className='columnData'>{value.Total_Assignments}</td>
                              
                              </tr>
  
                                 ))}
                        </table>
                
            </div>
   

</div>
  )
}

export default StuSubjctInfoAndRegInfo