import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import {useNavigate} from 'react-router-dom';
import Time from 'react-time-format';
import { useLocation } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";


const AssignmentsViewTeacherByID = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const Teacher_ID = location.state.id;
    console.log(Teacher_ID);

    const [Assignments, setAssignments] = useState([]);

    useEffect(()=>{
          axios.get(`http://localhost:3001/assignment/details/teacherbyid/${Teacher_ID}`).then((response) => {
            setAssignments(response.data);
          })
      },[]);


    //   const  SubmitAssignment = (Subject_ID) => {
    //     navigate("/studentSubmit" ,{ state: { Student_ID :Student_ID , Subject_ID : Subject_ID } });
    //   }

    const toUpdateAssignment = (id) => {
        navigate("/UpdateAssignment", { state: { id: id } });
      };
    

      const handleDeleteAssignment = (Assignment_No) => {

        //not working -  no way to send as a parameter 2 values Subject_ID and Assignment_No

        // const request = {
        //     params: {
        //         Teacher_ID: Teacher_ID,
        //         Assignment_No : Assignment_No

        //     }
        //   }

        // axios.delete(`http://localhost:3001/assignment/delete/teacherbyid/${request}`).then((response) => {
          
        //   alert("Student Deleted Successfully");
        //   console.log(response.data);
        // }
        // ).catch((err) => {
        //   console.log(err);
        //   alert("Student Not Deleted");
        // });
      };


    return (
        <div className='header-wraper' >
            
                  <table>
                          <tr>
                              
                              <td className='columnName'><h3>Assignment Number</h3></td>
                              <td className='columnName'><h3>Subject ID</h3></td>
                              <td className='columnName'><h3>Chapter Number</h3></td>
                              <td className='columnName'><h3>Special notice</h3></td>
                              <td className='columnName'><h3>DueDate</h3></td>
                              <td className='columnName'><h3>DueTime</h3></td>
                              <td className='columnName'><h3>Created_on</h3></td>
                              <td className='columnName'><h3>Edit</h3></td>
                              <td className='columnName'><h3>Remove</h3></td>
    
                                   
                          </tr>

                          {Assignments.map((value,key)=>(
                          <tr key={key}>
                            <td className='columnData'>{value.Assignment_No} {value.Lname}</td> 
                              <td className='columnData' >{value.Subject_ID}</td>
                              <td className='columnData' >{value.Chapter_No}</td>
                              <td className='columnData' >{value.Note}</td>

                              <td className='columnData' >
                                <Time value={value.DueDate} format="YYYY-MM-DD" style={{color:'red'}}/>
                                </td>

                                <td className='columnData' style={{color:'red'}}>11.59 PM</td>

                              <td className='columnData' >
                                  <Time value={value.Created_on} format="YYYY-MM-DD hh:mm:ss"  />
                              </td>
                              {/* <td><button onClick={() => deleteAssignment(value.Subject_ID)}>Delete</button></td> */}

                              <td><button onClick={() => toUpdateAssignment(value.Assignment_No)}>Edit <FaEdit size="1.5rem"/></button></td>
                            <td><button onClick={() => handleDeleteAssignment(value.Assignment_No)}>Remove <RiDeleteBin5Fill size="1.5rem"/></button></td>

                          </tr>
                          ))}

                  </table>
           
        </div>
      )
    
    }

export default AssignmentsViewTeacherByID


