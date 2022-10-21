import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import {useNavigate} from 'react-router-dom';


const SubjectDetails_List = () => {

    const [SubjectDetails, setSubjectDetails] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/subjects/details").then((response) => {
          setSubjectDetails(response.data);
        })
    },[]);


      const navigate = useNavigate();
    
      const toUpdateDetails= (id) => {
        navigate("/SubjectDetailsUpdate", { state: { id: id } });
      };
    



      const handleDelete = (id) => {

        axios.delete(`http://localhost:3001/subjects/delete/${id}`).then((response) => {
          
          alert("Subject Deleted Successfully");
          console.log(response.data);
        }
        ).catch((err) => {
          console.log(err);
          alert("Subject Not Deleted");
        })
        ;
      };
      


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
                                    <td className='columnName'><h3>Edit Details</h3></td>
                                    <td className='columnName'><h3>Remove Details</h3></td>

                                </tr>

                                {SubjectDetails.map((value,key)=>(
                                <tr key={key}>
                                    <td className='columnData'>{value.Subject_ID}</td> 
                                    <td className='columnData'>{value.Teacher_ID}</td> 
                                    <td className='columnData'>{value.Subject_Name}</td> 
                                    <td className='columnData'>{value.Grade}</td> 
                                    <td className='columnData'>{value.Total_Chapters}</td>
                                    <td className='columnData'>{value.Total_Assignments}</td>
                              
                                    <td><button onClick={() => toUpdateDetails(value.Subject_ID)}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(value.Subject_ID)}>Remove</button></td>
                                </tr>
  
                                 ))}
                        </table>
                        
                    </div>
           

        </div>
      )
    
    }

export default SubjectDetails_List


//