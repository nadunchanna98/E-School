import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import SlideShare from '../SlideShare';
import Time from 'react-time-format';

const StudentDetail_List_onlyCanView = () => {

    const [listOfStudents, setStudents] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/students/details").then((response) => {
          setStudents(response.data);
        })
    },[]);



    return (
        <div className='header-wraper'>


            <div className="welocme">
                    <h1>All Details About Students</h1>
                  
             </div>

                
                    <div className='studentTable'>

  

                        <table>
                                <tr>
                                    <td className='columnName'><h3>Name</h3></td>
                                    <td className='columnName'><h3>Grade</h3></td>
                                    <td className='columnName'><h3>Address</h3></td>
                                    <td className='columnName'> <h3>Gender</h3></td>
                                    <td className='columnName'><h3>Bdate</h3></td>
                                    <td className='columnName'><h3>Phone number</h3></td>
                                    <td className='columnName'><h3>email</h3></td>
                            
                                    
                                </tr>

                                {listOfStudents.map((value,key)=>(
                                <tr key={key}>
                                    <td className='columnData'>{value.Fname} {value.Lname}</td> 
                                    <td className='columnData'>{value.Grade}</td>
                                    <td className='columnData'>{value.Address}</td>
                                    <td className='columnData'>{value.Gender}</td>

                                    <td className='columnData' >
                                       <Time value={value.Bdate} format="YYYY-MM-DD" />
                                     </td>
                                 

                                    <td className='columnData'>{value.Phone_NO}</td>
                                    <td className='columnData'>{value.Email}</td>
                                 </tr>
  
                                 ))}
                        </table>
                        
                    </div>
           

        </div>
      )
    
    }

export default StudentDetail_List_onlyCanView
