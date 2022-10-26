import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import {useNavigate} from 'react-router-dom';
import SlideShare from '../SlideShare';

const TeacherDetail_List_onlyCanView = () => {

    const [listOfTeacher, setTeacher] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/teachers/details").then((response) => {
          setTeacher(response.data);
        })
    },[]);



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
                                   
                                </tr>

                                {listOfTeacher.map((value,key)=>(
                                <tr key={key}>
                                  <td className='columnData'>{value.Fname} {value.Lname}</td> 
                                    <td className='columnData'>{value.Grade}</td>
                                    <td className='columnData'>{value.Gender}</td>
                                    <td className='columnData'>{value.Phone_NO}</td>
                                    <td className='columnData' >{value.Subject_ID}</td>
                                    <td className='columnData'>{value.Email}</td>

                                 </tr>
                                 ))}

                        </table>
                    </div>
           

        </div>
      )
    
    }

export default TeacherDetail_List_onlyCanView


