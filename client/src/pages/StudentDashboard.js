import React from 'react'
import SlideShare from './SlideShare'
import { useLocation ,useNavigate } from "react-router-dom";
import  { useState } from 'react';
import "../App.css";
import axios from "axios";
import { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import Time from 'react-time-format';

const StudentDashboard = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
 
  
  const [Student_ID,setStudent_ID] = useState('');
  const [Fname , setFname ] = useState('');
  const [Lname , setLname ] = useState('');
  const [Gender , setGender ] = useState('');
  const [PhoneNO , setPhoneNO ] = useState();
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
          setPhoneNO(response.data[0].PhoneNO);
          setGrade(response.data[0].Grade);
          setBdate(response.data[0].Bdate);
          setAddress(response.data[0].Address);
          setEmail(response.data[0].Email);

          console.log(response.data[0].Student_ID);
      })
  },[]);
  

  //student id sent to get submited details 
  const toUpdateDetails = () => {
    navigate("/SubmitedDetailsOneStudent", { state: { id:Student_ID  } });
  };

       const toUpdateStudent = () => {
        navigate("/Update", { state: { id: Student_ID } });
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
                        <MDBCardText className="text-muted">{PhoneNO}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Personal Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Birth Date</MDBTypography>
                        <MDBCardText className="text-muted">
                        <Time value={Bdate} format="hh:mm:ss" style={{color:'red'}} />
                    
                          </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Gender</MDBTypography>
                        <MDBCardText className="text-muted">{Gender}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      
                            <td><button onClick={() => toUpdateDetails()}>View My Submitions</button></td>
                            <td><button onClick={() => toUpdateStudent()}>Edit Personal Details</button></td>
                       
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
  
}

export default StudentDashboard