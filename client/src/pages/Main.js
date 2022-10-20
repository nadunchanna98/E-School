import React from 'react';
import "../App.css";
import {useNavigate} from 'react-router-dom';

function Main() {

  const navigate = useNavigate();

  const handleSubmitTeacher =  async () =>{
    navigate("/LoginTeacher");
  }

  const handleSubmitStudent =  async () =>{
     navigate("/LoginStudent");
  }


  return (
   
    <div className="App">

      <div className="main" >
       
      <button onClick={handleSubmitTeacher }> Login As a Teacher </button > 
      <button onClick={handleSubmitStudent}> Login As a Student </button >
      </div>

    </div> 
 
  
  );
}

export default Main;