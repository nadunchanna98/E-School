//all assi: submited  details of one student
//studet dashboard

import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


const SubmitedDetailsOneStudent = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const Student_ID = location.state.id;

  console.log(Student_ID);

    const [SubmitedDetails, setSubmitedDetails] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/studentsubmited/details/${Student_ID}`).then((response) => {
            setSubmitedDetails(response.data);
        })
    },[]);




      const toUpdateDetails = (id) => {
        navigate("/SubmitDetailsUpdate", { state: { id: id } });   //only for one studet . not created yet
      };
    

      const handleDelete = (id) => {

        axios.delete(`http://localhost:3001/studentsubmited/details/${id}`).then((response) => {
          
          alert("Assignment Deleted Successfully");
          console.log(response.data);
        }
        ).catch((err) => {
          console.log(err);
          alert("Assignment Not Deleted");
        })
        ;
      };
      


    return (
        <div >
            {SubmitedDetails.map((value,key)=>(
                
                    <div className='submitTable'>

                        <table>
                                <tr>
                                    
                                    <td className='columnName'><h3>Subject ID</h3></td>
                                    <td className='columnName'><h3>Assignment No</h3></td>
                                    <td className='columnName'><h3>Uploading Status</h3></td>
                                    <td className='columnName'><h3>Assignment given Date</h3></td>
                                </tr>

                              
                                <tr key={key}>
                                  
                                    <td className='columnData'>{value.Subject_ID}</td> 
                                    <td className='columnData'>{value.Assignment_No}</td> 
                                    <td className='columnData'>{value.Uploading_Status}</td>
                                    <td className='columnData'>{value.Created_on}</td>
                              
                                    <td><button onClick={() => toUpdateDetails(value.Subject_ID)}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(value.Subject_ID)}>Remove</button></td>
                                </tr>
  
                                
                        </table>
                        
                    </div>
           
           ))}
        </div>
      )
    
    }

export default SubmitedDetailsOneStudent

