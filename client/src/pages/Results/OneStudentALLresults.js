//All student's results of one subject
//teacher dashboard
//student dashboard

import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';



const OneStudentALLresults = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const Student_ID = location.state.Student_ID;

  console.log(Student_ID);

    const [results, setResults] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/result/bystudent/${Student_ID}`).then((response) => {
            setResults(response.data);
        })
    },[]);
     

    console.log(results);

      const needtoRecheck = (id) => {
        navigate("/sendMassage", { state: { id: id } });   // not created yet
      };
    

    return (
        <div >
            
                
                    <div className='submitTable'>

                        <table>
                                <tr>
                                
                                    <td className='columnName'><h3>Subject ID</h3></td>
                                    <td className='columnName'><h3>Assignment No</h3></td>
                                    <td className='columnName'><h3>Results</h3></td>
                                    <td className='columnName'><h3>Special Notes</h3></td>
                                    <td className='columnName'><h3>Any Problem</h3></td>

                                </tr>

                                {results.map((value,key)=>(
                                      <tr key={key}>
                                          <td className='columnData'>
                                              
                                              {value.Subject_ID}
                                          
                                          </td> 
                            
                                          <td className='columnData'>{value.Assignment_No}</td> 
                                       
                                          <td className='columnData'>{value.Result}</td>
                                          <td className='columnData'>{value.Note}</td>
                                          
                                    
                                          <td><button onClick={() => needtoRecheck(value.Subject_ID)}>Send Massage</button></td>
                          
                                      </tr>
  
                                 ))}
                        </table>
                        
                    </div>
           
  
        </div>
      )
    
    }

export default OneStudentALLresults




