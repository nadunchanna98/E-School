import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import {useNavigate} from 'react-router-dom';
import SlideShare from '../SlideShare';

const TeacherDetails = () => {

    const [listOfTeacher, setTeacher] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/teachers/details").then((response) => {
          setTeacher(response.data);
        })
    },[]);

    const navigate = useNavigate();

    const toUpdateTeacher = (id) => {
        navigate("/updateteacher", { state: { id: id } });
      };

      
      const handleDelete = (id) => {

        axios.delete(`http://localhost:3001/teachers/${id}`).then((response) => {
          
          alert("Teacher Deleted Successfully");
          console.log(response.data);
        }
        ).catch((err) => {
          console.log(err);
          alert("Teacher Not Deleted");
        })
        ;
      };
    



    return (
        <div className='header-wraper'>     

          <div className="welocme">
                    <h1>All Details About Teachers</h1>
             </div>


                    <div className='TeacherTable'>


                        <table>
                                <tr>
                                     <td className='columnName'><h3>Name</h3></td>
                                    <td className='columnName'><h3>Grade</h3></td>
                                    <td className='columnName'><h3>Gender</h3></td>
                                    <td className='columnName'><h3>Phone number</h3></td>
                                    <td className='columnName'><h3>Subject</h3></td>
                                    <td className='columnName'><h3>email</h3></td>
                                    <td className='columnName'><h3>Remove</h3></td>
                                    <td className='columnName'><h3>Edit</h3></td>
                                </tr>

                                {listOfTeacher.map((value,key)=>(
                                <tr key={key}>
                                  <td className='columnData'>{value.Fname} {value.Lname}</td> 
                                    <td className='columnData'>{value.Grade}</td>
                                    <td className='columnData'>{value.Gender}</td>
                                    <td className='columnData'>{value.Phone_NO}</td>
                                    <td className='columnData' >{value.Subject_ID}</td>
                                    <td className='columnData'>{value.Email}</td>

                                    <td><button onClick={() => toUpdateTeacher(value.Student_ID)}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(value.Student_ID)}>Remove</button></td>
                                </tr>
                                 ))}

                        </table>
                    </div>
           

        </div>
      )
    
    }

export default TeacherDetails


