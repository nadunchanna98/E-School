import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import {useNavigate} from 'react-router-dom';
import Time from 'react-time-format';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const SubjectDetails_List = () => {

    const [SubjectDetails, setSubjectDetails] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/subjects/details").then((response) => {
          setSubjectDetails(response.data);
        })
    },[]);


      const navigate = useNavigate();
    
      const toUpdateDetails= (id) => {
        // navigate("/SubjectDetailsUpdate", { state: { id: id } }); // not created yet
        navigate("/updateteacher", { state: { id: id } });
      };
    

      const handleDelete = (id) => {

        axios.delete(`http://localhost:3001/subjects/delete/${id}`).then((response) => {
          
          alert("Subject Deleted Successfully");
          console.log(response.data);
        }
        ).catch((err) => {
          console.log(err);
          alert("No access to delete Subject");
        })
        ;
      };
      


    return (
        <div className='header-wraper' >
                
                    <div className='subjectsTable'>

                        <table>
                                <tr>
                                    <td className='columnName'><h3>Subject ID</h3></td>
                                    <td className='columnName'><h3>Teacher Name</h3></td>
                                    <td className='columnName'><h3>Subject Name</h3></td>
                                    <td className='columnName'><h3>Grade</h3></td>
                                    <td className='columnName'><h3>Total Chapters</h3></td>
                                    <td className='columnName'><h3>Total Assignments</h3></td>
                                    <td className='columnName'><h3>Edit Details</h3></td>
                                    <td className='columnName'><h3>Remove Details</h3></td>

                                </tr>

                                {SubjectDetails.map((value,key)=>(
                                <tr key={key}>
                                    <td className='columnData'>{value.Subject_ID}</td> 
                                    <td className='columnData'>{value.Fname}  {value.Lname}</td> 
                                    <td className='columnData'>{value.Subject_Name}</td> 
                                    <td className='columnData'>{value.Grade}</td> 
                                    <td className='columnData'>{value.Total_Chapters}</td>
                                    <td className='columnData'>{value.Total_Assignments}</td>
                              
                                    <td><button onClick={() => toUpdateDetails(value.Teacher_ID)}>Edit <FaEdit size="1.5rem"/></button></td>
                                    <td><button onClick={() => handleDelete(value.Subject_ID)}>Remove <RiDeleteBin5Fill size="1.5rem"/></button></td>
                                </tr>
  
                                 ))}
                        </table>
                        
                    </div>
           

        </div>
      )
    
    }

export default SubjectDetails_List


//