import React from 'react'
import axios from "axios";
import FileUpload from './file-upload/file-upload.component';
import  { useState } from 'react';

const AssignmentFormTeacher = () => {

    const [Chapter_No , setChapter_No ] = useState('');
    const [Assignment_No, setAssignment_No ] = useState('');
    const [Subject_ID, setSubject_ID ] = useState('');
    const [description, setdescription ] = useState('');
    const [DueTime, setDueTime ] = useState('');
    const [DueDate, setDueDate ] = useState('');
    const [TotalMarks, setTotalMarks ] = useState('');
    const [Doc, setDoc ] = useState('');
    
    
    const Application = async (e) => {
      e.preventDefault();
  
      const newApplication = {
        Chapter_No : Chapter_No, 
        Assignment_No : Assignment_No,
        Subject_ID : Subject_ID,
        description : description,
        DueTime : DueTime,
        DueDate : DueDate,
        TotalMarks : TotalMarks,
        Doc : Doc,
      }

      try {
        await axios.post(`http://localhost:3001/assignment/insert/${Subject_ID}`, newApplication)
        .then((response) => {
          console.log(response.data);
        })
      } catch (error) {
        console.log(error);
      }
        
  }
    
    return (
     
  
    <form   onSubmit={Application} >
  
      <div className="header">
        <div className="assignment" >
  
          <h1 className='Topic' >Assignment</h1>
          <h3 className='Topic' >Subject</h3>
                  <div className="form-group"></div>

                  <label>Chapter number</label>
                   <select name="Chapter_No"  required value={Chapter_No}  onChange={(e) => setChapter_No(e.target.value)}>
                      <option value="">Select Chapter</option>
                      <option value="1">Chapter 1</option>
                      <option value="2">Chapter 2</option>
                      <option value="3">Chapter 3</option>
                      <option value="4">Chapter 4</option>
                      <option value="5">Chapter 5</option>
                      <option value="6">Chapter 6</option>
                      <option value="7">Chapter 7</option>
                      <option value="8">Chapter 8</option>
                      <option value="9">Chapter 9</option>
                      <option value="10">Chapter 10</option>          
                  </select>

  
                  <label>Assignment number</label>
                  <select name="Assignment_No"  required value={Assignment_No}  onChange={(e) => setAssignment_No(e.target.value)}>
                      <option value="">Select Assignment </option>
                      <option value="1">Assignment No 1</option>
                      <option value="2">Assignment No 2</option>
                      <option value="3">Assignment No 3</option>
                      <option value="4">Assignment No 4</option>
                      <option value="5">Assignment No 5</option>            
                  </select>

                                          
                  <label >description</label>
                  <input className='description ' type="text" placeholder="description" name="description" required  
                  value={description}  onChange={(e) => setdescription(e.target.value)} 
                  />
                  
                  <label>Due Time</label>
                  <input type="time" placeholder="12.00.PM" name="DueTime" required  
                  value={DueTime}  onChange={(e) => setDueTime(e.target.value)} 
                  />

                  <label>Due Date</label>
                  <input type="date" placeholder="Due Date" name="DueDate" required  
                  value={DueDate}  onChange={(e) => setDueDate(e.target.value)} 
                  />

                  <label>Total Marks</label>
                  <input type="text" placeholder="Total Marks" name="TotalMarks" required  
                  value={TotalMarks}  onChange={(e) => setTotalMarks(e.target.value)} 
                  />

                  <label>File</label>
                   <FileUpload
                            accept=".jpg,.png,.jpeg .pdf"
                            label="Profile Image(s)"
                            multiple
                            value={Doc}
                            onChange={(e) => setDoc(e.target.value)}
                            required
                            />
                            
                    

          <button className='uplpadbtn'  type="submit">Upload the Assignment</button>
        </div>
  
      </div> 
      </form>
    
    );
  }


export default AssignmentFormTeacher