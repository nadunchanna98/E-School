import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../App.css";
import {useNavigate} from 'react-router-dom';


const StudentDetail_List = () => {

    const [Assignments, setAssignments] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/assignment/details/${id}`).then((response) => {
          setAssignments(response.data);
        })
    },[]);


      const navigate = useNavigate();
    
      const toUpdateAssignment = (id) => {
        navigate("/UpdateAssignment", { state: { id: id } });
      };
    


      const handleDeleteAssignment = (id) => {

        axios.delete(`http://localhost:3001/students/delete/${id}`).then((response) => {
          
          alert("Student Deleted Successfully");
          console.log(response.data);
        }
        ).catch((err) => {
          console.log(err);
          alert("Student Not Deleted");
        });
      };
      


    return (
        <div >
                
                    <div className='studentTable'>

                        <table>
                                <tr>
                                    <td className='columnName'><h3>Subject_ID</h3></td>
                                    <td className='columnName'><h3>Assignment_No</h3></td>
                                    <td className='columnName'> <h3>Chapter_No</h3></td>
                                    <td className='columnName'><h3>Note</h3></td>
                                    <td className='columnName'><h3>DueDate</h3></td>
                                    <td className='columnName'><h3>DueTime</h3></td>
                                    <td className='columnName'><h3>Remove</h3></td>
                                    <td className='columnName'><h3>Edit</h3></td>
                                    
                                </tr>

                                {setAssignments.map((value,key)=>(
                                <tr key={key}>
                                    <td className='columnData'>{value.Fname} {value.Lname}</td> 
                                    <td className='columnData'>{value.Grade}</td>
                                    <td className='columnData'>{value.Chapter_No}</td>
                                    <td className='columnData'>{value.Note}</td>
                                    <td className='columnData' >{value.Bdate}</td>
                                    <td className='columnData'>{value.Phone_NO}</td>
                                    <td className='columnData'>{value.Email}</td>

                                    <td><button onClick={() => toUpdateAssignment(value.Student_ID)}>Edit</button></td>
                                    <td><button onClick={() => handleDeleteAssignment(value.Student_ID)}>Remove</button></td>
                                </tr>
  
                                 ))}
                        </table>
                        
                    </div>
           

        </div>
      )
    
    }

export default StudentDetail_List


//