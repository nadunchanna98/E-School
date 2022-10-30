import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import {useNavigate} from 'react-router-dom';

const All_SubjectsViewOnly = () => {

    const [SubjectDetails, setSubjectDetails] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/subjects/details").then((response) => {
          setSubjectDetails(response.data);
        })
    },[]);

    const navigate = useNavigate();




  return (
     <div className='header-wraper' >
                
                    <div className='subjectsTable'>

                        <table>
                                <tr>
                                    <td className='columnName'><h3>Subject ID</h3></td>
                                    <td className='columnName'><h3>Teacher ID</h3></td>
                                    <td className='columnName'><h3>Subject Name</h3></td>
                                    <td className='columnName'><h3>Grade</h3></td>
                                    <td className='columnName'><h3>Total Chapters</h3></td>
                                    <td className='columnName'><h3>Total Assignments</h3></td>
                              

                                </tr>

                                {SubjectDetails.map((value,key)=>(
                                <tr key={key}>
                                    <td className='columnData'>{value.Subject_ID}</td> 
                                    <td className='columnData'>{value.Fname}  {value.Lname}</td> 
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

export default All_SubjectsViewOnly