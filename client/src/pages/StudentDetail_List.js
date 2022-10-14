import React from 'react';
import axios from "axios";
import { useEffect,useState ,button } from "react";
import "../App.css";

const StudentDetail_List = () => {

    const [listOfStudents, setStudents] = useState([]);

    const [deleteStudent, setDeleteStudent] = useState(false);
    const [updateStudent, setUpdateStudent] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:3001/students/details").then((response) => {
          setStudents(response.data);
        })
    },[]);

    function handleRemove(id) {
        const newList = listOfStudents.filter((item) => item.id !== id);
        setStudents(newList);
      }



    return (
        <div >
                
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
                                    <td className='columnName'><h3>Remove</h3></td>
                                    <td className='columnName'><h3>Edit</h3></td>
                                    
                                </tr>

                                {listOfStudents.map((value,key)=>(
                                <tr key={key}>
                                    <td className='columnData'>{value.Fname} {value.Lname}</td> 
                                    <td className='columnData'>{value.Grade}</td>
                                    <td className='columnData'>{value.Address}</td>
                                    <td className='columnData'>{value.Gender}</td>
                                    <td className='columnData' >{value.Bdate}</td>
                                    <td className='columnData'>{value.Phone_NO}</td>
                                    <td className='columnData'>{value.Email}</td>

                                    <td><button onClick={(e) => setUpdateStudent(value)}>Edit</button></td>
                                    <td><button onClick={() => handleRemove(value.id)}>Remove</button></td>
                                </tr>
  
                                 ))}
                        </table>
                        
                    </div>
           

        </div>
      )
    
    }

export default StudentDetail_List


//