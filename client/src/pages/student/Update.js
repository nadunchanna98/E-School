import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import "../../App.css";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Time from 'react-time-format';
import moment from "moment";

const Update = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const Student_ID = location.state.id;

   // console.log(Student_ID); --ok


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
        axios.get( `http://localhost:3001/students/details/${Student_ID}`).then((response) => {
            setFname(response.data[0].Fname);
            setLname(response.data[0].Lname);
            setGender(response.data[0].Gender);
            setPhone_NO(response.data[0].Phone_NO);
            setGrade(response.data[0].Grade);
            setBdate(response.data[0].Bdate);
            setAddress(response.data[0].Address);
            setEmail(response.data[0].Email);

        })
    },[]);
    

    

    const Register = async (e) => {
        e.preventDefault();

       // console.log(Fname);  --ok

        const updateStudent = {  
            Student_ID: Student_ID,
            Fname: Fname,
            Lname: Lname,
            Gender: Gender,
            Phone_NO: Phone_NO,
            Grade: Grade,
            Bdate: moment.utc(Bdate).format('MM/DD/YY'),
            Address: Address,
            Email: Email,
            Password: Password,
        }

     //   console.log(updateStudent);  ---ok
    
        try {
            await axios.put(`http://localhost:3001/students/update/${Student_ID}`,updateStudent).then
            (response => {
                console.log(response);}
                ); 
                navigate("/students");
        } catch (error) {
                 console.log(error);
        }


        
    }
   

  return (
   
    <form   onSubmit={Register} >

    <div className="header-wraper">
      <div className="Registration" >

        <h1 className='Topic' >Update Details</h1>
                <div className="form-group"></div>

                
                 <label>First Name</label>
                <input type="text" placeholder={"Change The name"}  name="Fname" required  
                value={Fname}  onChange={(e) => setFname(e.target.value)} 
                />
                
                <label>Last Name</label>
                <input type="text" placeholder="Sachinthani" name="Lname" required
                value={Lname} onChange={(e) => setLname(e.target.value)}
                />

                <label>Sexuality</label>
                <input type="text" placeholder="Male/Female" name="Gender" required  
                value={Gender}  onChange={(e) => setGender(e.target.value)} 
                />
                
                <label>Phone Number</label>
                <input type="text" placeholder="0701111111" name="Phone_NO" required
                value={Phone_NO} onChange={(e) => setPhone_NO(e.target.value)}
                />

                <label>Grade</label>
                <select name="Grade"  required value={Grade}  onChange={(e) => setGrade(e.target.value)}>
                    <option value="">Select Grade</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                  
                    
                </select>

                <label>Birth Day</label>
                <input type="date"  name="Bdate"
                value={Bdate} onChange={(e) => setBdate(e.target.value)}
                />

                <label>Home Address</label>
                <input type="text" placeholder="234/2 , Nuwaraeliya , Srilanka" name="Address" required
                value={Address} onChange={(e) => setAddress(e.target.value)}
                />
                
                                        
                <label>Email</label>
                <input type="text" placeholder="Enter Email" name="Email" required  
                value={Email}  onChange={(e) => setEmail(e.target.value)} 
                />
                
                <label>Password</label>
                <input type="password" placeholder="Enter Password" name="psw" required
                value={Password} onChange={(e) => setPassword(e.target.value)}
                />

        <button   type="submit">Save Update</button>
      </div>

    </div> 
    </form>
  )
}

export default Update
            