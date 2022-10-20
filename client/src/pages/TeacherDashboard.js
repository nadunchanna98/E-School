import React from 'react'
import SlideShare from './SlideShare'
import {HeaderTeacher} from '../components/layout/Header'
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const TeacherDashboard = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
    //To Teacher given assignments and studens responses
    const assignmentDetails = () => {
      navigate("/allstdnt_Submitions_of_1tchr", { state: { id:'b4fe7718-524d-4f88-8ce5-43914870d7d5'  } });
    };


  return (

    <div>   
     
          <HeaderTeacher/>  
          <div>
        <button onClick={() => assignmentDetails()}>Edit</button>
        </div>  
   
      </div>

  )
}

export default TeacherDashboard