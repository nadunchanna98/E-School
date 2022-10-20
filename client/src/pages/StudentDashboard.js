import React from 'react'
import SlideShare from './SlideShare'
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const StudentDashboard = () => {

  const navigate = useNavigate();
  const location = useLocation();


  //student id sent to get submited details 
  const toUpdateDetails = () => {
    navigate("/SubmitedDetailsOneStudent", { state: { id:'b4fe7718-524d-4f88-8ce5-43914870d7d5'  } });
  };


  return (
    <div>
      TiME TO LEARN
        <div>
        <h3>My Assignment submition details </h3>
        <button onClick={() => toUpdateDetails()}>Edit</button>
        </div>
    </div>
    

  )
}

export default StudentDashboard