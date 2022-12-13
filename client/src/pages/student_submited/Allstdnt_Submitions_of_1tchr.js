//All student submitions for One teacher
//teacher given assignments and studens responses
//teacher dashboard


import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Allstdnt_Submitions_of_1tchr = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const Teacher_ID = location.state.id;

  console.log(Teacher_ID);

    const [SubmitedDetails, setSubmitedDetails] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3001/studentsubmited/detailsof/${Teacher_ID}`).then((response) => {
            setSubmitedDetails(response.data);
        })
    },[]);

    console.log(SubmitedDetails);


      const toUpdateDetails = (id) => {
        navigate("/SubmitDetailsView", { state: { id: id } });   //only for one studet . not created yet
      };
    

      const handleDelete = (id) => {

        axios.delete(`http://localhost:3001/studentsubmited/delete/${id}`).then((response) => {
          
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
        <div className='submitDetailsOneStudent'>
            
                
                    <div className='submitTable'>

                        <table>
                                <tr>
                                    
                                    <td className='columnName'><h3>Student ID</h3></td>
                                    <td className='columnName'><h3>Subject ID</h3></td>
                                    <td className='columnName'><h3>Assignment No</h3></td>
                                    <td className='columnName'><h3>Uploading Status</h3></td>
                                    <td className='columnName'><h3>Special Notes</h3></td>
                                    <td className='columnName'><h3>Submited Date</h3></td>
                                    <td className='columnName'><h3>Edit</h3></td>
                                    <td className='columnName'><h3>Delete</h3></td>

                                </tr>

                                {SubmitedDetails.map((value,key)=>(
                                      <tr key={key}>
                                          <td className='columnData'>{value.Student_ID}</td> 
                                          <td className='columnData'>{value.Subject_ID}</td> 
                                          <td className='columnData'>{value.Assignment_No}</td> 
                                          <td className='columnData'>{value.Uploading_Status}</td>
                                          <td className='columnData'>{value.Note}</td>
                                          <td className='columnData'>{value.Created_on}</td>
                                    
                                          <td><button onClick={() => toUpdateDetails(value.Subject_ID)}>Edit <FaEdit size="1.5rem"/></button></td>
                                          <td><button onClick={() => handleDelete(value.Subject_ID)}>Remove <RiDeleteBin5Fill size="1.5rem"/></button></td>
                                      </tr>
  
                                 ))}
                        </table>
                        
                    </div>
           
  
        </div>
      )
    
    }

export default Allstdnt_Submitions_of_1tchr

