import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import {useNavigate} from 'react-router-dom';
import Time from 'react-time-format';
import { useLocation } from "react-router-dom";
import {BiCloudUpload} from "react-icons/bi"; 


const All_Assignment_1student = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const Student_ID = location.state.Student_ID;

    const [Assignments, setAssignments] = useState([]);

    useEffect(()=>{
          axios.get(`http://localhost:3001/assignment/details/student/${Student_ID}`).then((response) => {
            setAssignments(response.data);
          })
      },[]);


      const  SubmitAssignment = (Subject_ID) => {
        navigate("/studentSubmit" ,{ state: { Student_ID :Student_ID , Subject_ID : Subject_ID } });
      }



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
                              {/* <td className='columnName'><h3>Created_on</h3></td> */}
                              <td className='columnName'><h3>Submit</h3></td>
    
                                   
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

                              {/* <td className='columnData' >
                                  <Time value={value.Created_on} format="YYYY-MM-DD hh:mm:ss"  />
                              </td> */}
                              <td><button onClick={() => SubmitAssignment(value.Subject_ID)}> Upload <BiCloudUpload /> </button></td>

                          </tr>
                          ))}

                  </table>
           
        </div>
      )
    
    }

export default All_Assignment_1student


//