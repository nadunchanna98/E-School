import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


const AllResults = () => {


    const navigate = useNavigate();
    const location = useLocation();
  
  
      const [results, setResults] = useState([]);
  
      useEffect(()=>{
          axios.get("http://localhost:3001/result/alldetails").then((response) => {
              setResults(response.data);
          })
      },[]);




  return (
    <div >
            
                
    <div className='submitTable'>

        <table>
                <tr>          
                    <td className='columnName'><h3>Student Name</h3></td>
                    <td className='columnName'><h3>Subject ID</h3></td>
                    <td className='columnName'><h3>Assignment No</h3></td>     
                    <td className='columnName'><h3>Results</h3></td>
                    <td className='columnName'><h3>Special Notes</h3></td>
                </tr>

                {results.map((value,key)=>(
                      <tr key={key}>
                          <td className='columnData'>{value.Fname} {value.Lname}</td> 
                          <td className='columnData'>{value.Subject_ID}</td> 
                          <td className='columnData'>{value.Assignment_No}</td> 
                          <td className='columnData'>{value.Result}</td>
                          <td className='columnData'>{value.Note}</td>
                          
                      </tr>

                 ))}
        </table>
        
    </div>


</div>
  )
}

export default AllResults