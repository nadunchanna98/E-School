//All student's results of one subject
//teacher dashboard
//student dashboard


import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


const AllStudent_Results_Of_1Subject = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const Teacher_ID = location.state.id;

  console.log(Teacher_ID);

    const [results, setResults] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/results/detailsoft/${Teacher_ID}`).then((response) => {
            setResults(response.data);
        })
    },[]);




      const toUpdateDetails = (id) => {
        navigate("/resultsupdatebyt", { state: { id: id } });   // not created yet
      };
    

      const handleDelete = (id) => {

        axios.delete(`http://localhost:3001/results/delete/${id}`).then((response) => {
          
          alert("Results Deleted Successfully");
          console.log(response.data);
        }
        ).catch((err) => {
          console.log(err);
          alert("Results Not Deleted");
        })
        ;
      };
      


    return (
        <div >
            
                
                    <div className='submitTable'>

                        <table>
                                <tr>
                                    
                                    <td className='columnName'><h3>Student ID</h3></td>
                                    <td className='columnName'><h3>Subject ID</h3></td>
                                    <td className='columnName'><h3>Assignment No</h3></td>
                             
                                    <td className='columnName'><h3>Results</h3></td>
                                    <td className='columnName'><h3>Special Notes</h3></td>
                                    <td className='columnName'><h3>Edit</h3></td>
                                    <td className='columnName'><h3>Delete</h3></td>

                                </tr>

                                {results.map((value,key)=>(
                                      <tr key={key}>
                                          <td className='columnData'>{value.Student_ID}</td> 
                                          <td className='columnData'>{value.Subject_ID}</td> 
                                          <td className='columnData'>{value.Assignment_No}</td> 
                                       
                                          <td className='columnData'>{value.Result}</td>
                                          <td className='columnData'>{value.Note}</td>
                                          
                                    
                                          <td><button onClick={() => toUpdateDetails(value.Subject_ID)}>Edit</button></td>
                                          <td><button onClick={() => handleDelete(value.Subject_ID)}>Remove</button></td>
                                      </tr>
  
                                 ))}
                        </table>
                        
                    </div>
           
  
        </div>
      )
    
    }

export default AllStudent_Results_Of_1Subject