import React from 'react'
import SlideShare from './SlideShare'
import {HeaderTeacher} from '../components/layout/Header'
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const TeacherDashboard = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
    //Teacher given assignments and studens responses
    const assignmentDetails = () => {
      navigate("/allStudentsSubmitionsOfOneTeacher", { state: { id:'T2003'  } });
    };


  return (

    <div>   
     
          <HeaderTeacher/>  
        <div>
          <h3>Assignment submition details of Students</h3>
        <button onClick={() => assignmentDetails()}>Edit</button>
        </div>
      </div>

  )
}

export default TeacherDashboard