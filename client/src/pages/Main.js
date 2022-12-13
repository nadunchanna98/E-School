import React from 'react';
import "../App.css";
import {useNavigate} from 'react-router-dom';


import Header from '../components/layout/Header';
import SlideShare from '../pages/SlideShare';

function Main() {

  

  const navigate = useNavigate();

  const handleSubmitTeacher =  async () =>{
    navigate("/TeacherLoginNew");
  }

  const handleSubmitStudent =  async () =>{
     navigate("/StudentLoginNew");
  }


  return (
   
    <div>
    <div className="App">
          <Header/>
          <SlideShare/>     
      <div className="main" >
       
      <button onClick={handleSubmitTeacher }> Login As a Teacher </button > 
      <button onClick={handleSubmitStudent}> Login As a Student </button >
      </div>

    </div> 
    </div>
  
  );
}

export default Main;