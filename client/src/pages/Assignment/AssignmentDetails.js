import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import {useNavigate} from 'react-router-dom';
import Time from 'react-time-format';

const AssignmentDetails = () => {


    const [Assignments, setAssignments] = useState([]);

    // useEffect(()=>{
    //     axios.get(`http://localhost:3001/assignment/details/${id}`).then((response) => {
    //       setAssignments(response.data);
    //     })
    // },[]);

    useEffect(()=>{
          axios.get("http://localhost:3001/assignment/details").then((response) => {
            setAssignments(response.data);
          })
      },[]);


      const navigate = useNavigate()
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
                            <td className='columnData'>{value.Assignment_No} </td> 
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

                              <td><button onClick={() => toUpdateAssignment(value.Student_ID)}>Edit</button></td>
                               <td><button onClick={() => handleDeleteAssignment(value.Student_ID)}>Remove</button></td>
                                    
                          </tr>
                          ))}

                  </table>
           
        </div>
      )
    
    }

export default AssignmentDetails


//