import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../App.css";

const TeacherDetails = () => {

    const [listOfTeacher, setTeacher] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/teachers").then((response) => {
          setTeacher(response.data);
        })
    },[]);


    return (
        <div >
                
                    <div className='TeacherTable'>

                        <table>
                                <tr>
                                    <td><h3>email</h3></td>
                                    <td><h3>password</h3></td>
                                </tr>

                                {listOfTeacher.map((value,key)=>(
                                <tr key={key}>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                </tr>
                                 ))}

                        </table>
                    </div>
           

        </div>
      )
    
    }

export default TeacherDetails


