import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../App.css";

const StudentDetails = () => {

    const [listOfStudents, setStudents] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/students").then((response) => {
          setStudents(response.data);
        })
    },[]);


    return (
        <div >
                
                    <div className='studentTable'>

                        <table>
                                <tr>
                                    <td><h3>email</h3></td>
                                    <td><h3>password</h3></td>
                                </tr>

                                {listOfStudents.map((value,key)=>(
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

export default StudentDetails


//