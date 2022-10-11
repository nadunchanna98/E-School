import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../App.css";

const StudentDetails = () => {

    const [listOfStudents, setListOfStudents] = useState([]);
    const [aboutStudentDetails,setStudentDetails] = useState('Student Details');

    useEffect(()=>{
        axios.get("http://localhost:3001/students").then((response) => {
          setListOfStudents(response.data);
          console.log(response.data);
        })
        caches((error) => {
            if(error.response.data.message){
                setStudentDetails(error.response.data.message);
             }
        })
        ;
    },[]);


    return (
        <div className='App'>
                {listOfStudents.map((value,key)=>{
                    
                    <div className='studentTable'>


                        <table>
                                <tr>
                                    <td>email</td>
                                    <td>password</td>
                                </tr>

                                {
                                <tr key={0}>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                </tr>
                                }

                        </table>
                                <div className='massageLine'>
                                     <h1>{aboutStudentDetails}</h1>
                                </div>)
                    
                    </div>
            })}

        </div>
      )
    
    }

export default StudentDetails