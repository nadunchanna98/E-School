import React from 'react'
import SlideShare from '../SlideShare'
import { useLocation ,useNavigate } from "react-router-dom";
import  { useState } from 'react';
import "../../App.css";
import axios from "axios";
import { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import Time from 'react-time-format';
import StudentSubmitton from '../student_submited/StudentSubmitton';
import { confirmAlert } from 'react-confirm-alert'; // Import 
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



const StudentDashboard = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
 
  
  const [Student_ID,setStudent_ID] = useState('');
  const [Fname , setFname ] = useState('');
  const [Lname , setLname ] = useState('');
  const [Gender , setGender ] = useState('');
  const [Phone_NO , setPhone_NO ] = useState();
  const [Grade, setGrade  ] = useState('');
  const [Bdate, setBdate  ] = useState();
  const [Address, setAddress  ] = useState('');
  const [Email , setEmail ] = useState('');
  const [Password, setPassword] = useState('');

  
  useEffect(()=>{
      axios.get( `http://localhost:3001/students/details/email/${email}`).then((response,) => {

    console.log(response)
    
          setStudent_ID(response.data[0].Student_ID)
          setFname(response.data[0].Fname);
          setLname(response.data[0].Lname);
          setGender(response.data[0].Gender);
          setPhone_NO(response.data[0].Phone_NO);
          setGrade(response.data[0].Grade);
          setBdate(response.data[0].Bdate);
          setAddress(response.data[0].Address);
          setEmail(response.data[0].Email);

          console.log(response.data[0].Student_ID);
      })
  },[]);
  

  //student id sent to get submited details 
  const ViewMySubmitions = () => {
    navigate("/SubmitedDetailsOneStudent", { state: { id:Student_ID  } });
  };

       const toUpdateDetails = () => {
        navigate("/Update", { state: { id: Student_ID } });
      };
    
      //view assignment need to submit
      const  viewAssignments = () => {
        navigate("/allAssignmentOfOneStudent" ,{ state: { Student_ID :Student_ID } });
      }

      const  newfun = () => {
        navigate("/StuSubjctInfoAndRegInfo" ,{ state: { Student_ID :Student_ID } });
      }

      //all assignmens results
      const  allmyResults= () => {
        navigate("/oneStudentALLresults" ,{ state: { Student_ID : Student_ID } });
      }
      
      const handleDelete = () => {

        axios.delete(`http://localhost:3001/students/delete/${Student_ID}`).then((response) => {
          
          alert("Student Deleted Successfully");
          navigate("/");     
          console.log(response.data);
        }
        ).catch((err) => {
          console.log(err);
          alert("Student Not Deleted");
        })
        ;
      };

//DELERE CONFIRMATION ALERT BOX 
      const confirmDelete = (Student_ID) => {
        confirmAlert({
          title: 'Confirm to Delete',
          message: 'Are you sure to do this.',
          buttons : [
            {
              className: 'confirmAlert',
              label: 'Yes',
              style: {backgroundColor: 'red'},
              onClick: () => handleDelete(Student_ID)
            },
            {
              label: 'No',
            }
          ]
        });
      };


  return (
    
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://www.pngitem.com/pimgs/m/475-4750681_icon-png-download-man-icon-transparent-png.png"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{Fname+" "+Lname}</MDBTypography>
                  <MDBCardText>{"Grade " +Grade}</MDBCardText>
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
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{Phone_NO}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Personal Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Birth Date</MDBTypography>
                        <MDBCardText className="text-muted">
                        <Time value={Bdate} format="YYYY-MM-DD"  />
                    
                          </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Gender</MDBTypography>
                        <MDBCardText className="text-muted">{Gender}</MDBCardText>
                      </MDBCol>

                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      
                            <td><button  onClick={() =>ViewMySubmitions()}>View My Submitions</button></td>
                            <td><button onClick={() => toUpdateDetails()}>Edit Personal Details</button></td>
                            
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
                     <MDBCol>
                             <div className="d-flexx">
                                   <button onClick={() => viewAssignments()}>Need to Submit </button>
                                  <button  onClick={() => allmyResults()}>View My Results</button>
                                  <button  onClick={() => newfun()}>Register Details with Subject Details</button>
                                  {/* <button onClick={() => confirmDelete()}>Delete my Account </button>  */}
                              </div>
                    </MDBCol>
      </MDBContainer>
    </section>
  );
  
}

export default StudentDashboard