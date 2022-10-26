//import {HeaderTeacher} from '../components/layout/Header'
import React from 'react'
//import SlideShare from './SlideShare'
import { useLocation ,useNavigate } from "react-router-dom";
import  { useState } from 'react';
import "../../App.css";
import axios from "axios";
import { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { confirmAlert } from 'react-confirm-alert'; // Import 
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const TeacherDashboard = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;

  console.log(email)

  const [Teacher_ID,setTeacher_ID] = useState('');
  const [Fname , setFname ] = useState('');
  const [Lname , setLname ] = useState('');
  const [Gender , setGender ] = useState('');
  const [Phone_NO , setPhone_NO ] = useState();
  const [Grade, setGrade  ] = useState('');
  const [Subject_ID, setSubject_ID  ] = useState('');
  const [Email , setEmail ] = useState('');
  //const [Password, setPassword] = useState('');

  
  useEffect(()=>{
    axios.get( `http://localhost:3001/teachers/details/email/${email}`).then((response,) => {

  console.log(response)
  
  console.log(response);

  setTeacher_ID(response.data[0].Teacher_ID)
  setFname(response.data[0].Fname);
  setLname(response.data[0].Lname);
  setGender(response.data[0].Gender);
  setPhone_NO(response.data[0].Phone_NO);
  setSubject_ID(response.data[0].Subject_ID);
  setGrade(response.data[0].Grade);
  setEmail(response.data[0].Email);  

        console.log(response.data[0].Teacher_ID);
    })
},[]);




 
    const  resultsDetails = () => {
      navigate("/allStudentaesults0f1Subject" ,{ state: { id:Teacher_ID  } });  //page - AllStudent_Results_Of_1Subject
    }

    const  viewAllSubmitions = () => {
      navigate("/allStudentsSubmitionsOfOneTeacher" ,{ state: { id:Teacher_ID  } });
    }

    const  subjectsDetails = () => {
      navigate("/subjectsDetails");
    }

    const  assignmentByTeacher = () => {
      navigate("/assignmentByTeacher");
    }

  

    const handleDelete = (Teacher_ID) => {

      axios.delete(`http://localhost:3001/teachers/delete/${Teacher_ID}`).then((response) => {
        
        alert("Teacher Deleted Successfully");
        console.log(response.data);
        navigate("/");
      }
      ).catch((err) => {
        console.log(err);
        alert("Teacher Not Deleted");
      })
      ;
    };

    const confirmDelete = () => {
      confirmAlert({
        title: 'Confirm to Delete',
        message: 'Are you sure to do this.',
        buttons : [
          {
            className: 'confirmAlert',
            label: 'Yes',
            style: {backgroundColor: 'red'},
            onClick: () => handleDelete(Teacher_ID)
          },
          {
            label: 'No',
          }
        ]
      });
    };
  

  return (

    <section className="vh-1000" style={{ backgroundColor: '#f4f5f7' }}>

      <div className="welocme">
        <h1>Welocme To The Teacher Dashboard</h1>
      </div>

    
      
      
      <MDBContainer className="py-5 h-1000">
        <MDBRow className="justify-content-center align-items-center h-400">
          <MDBCol lg="6" className="mb-5 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://www.freepnglogos.com/uploads/teacher-png/teacher-teachers-icon-flatastic-iconset-custom-icon-design-36.png"
                    alt="Avatar" className="my-5" style={{ width: '400px' }} fluid />

                  <MDBTypography tag="h5">{Fname+" "+Lname}</MDBTypography>

                  <MDBCardText>{"Subject ID  : " + Subject_ID}</MDBCardText>
              

                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Account Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{Email}</MDBCardText>
                      </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Teach Grade</MDBTypography>
                        <MDBCardText className="text-muted">{Grade}</MDBCardText>
                      </MDBCol>

                    </MDBRow>

                    <MDBTypography tag="h6">Personal Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">

                        <MDBTypography tag="h6">Phone Number</MDBTypography>

                        <MDBCardText className="text-muted">

                        <MDBCardText className="text-muted">{Phone_NO}</MDBCardText>
                          </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Gender</MDBTypography>
                        <MDBCardText className="text-muted">{Gender}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

  
   
               
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        
        <MDBCol>
                    <div className="d-flexx">
        
        <button  onClick={() =>assignmentByTeacher()}>Create A New Assignment </button>
        <button onClick={() => resultsDetails()}>Assignment results</button>
        <button onClick={() => viewAllSubmitions()}>View All Submitions </button>
        <button onClick={() => subjectsDetails()}>Details About All Subjects </button>
        <button onClick={() => confirmDelete()}>Delete my Account </button>
        
</div>
                    </MDBCol>
      </MDBContainer>
    </section>

  );
}

export default TeacherDashboard