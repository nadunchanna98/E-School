import React from 'react'
import axios from "axios";
import FileUpload from './file-upload/file-upload.component';
import  { useState } from 'react';
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const StudentSubmitton = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const Student_ID = location.state.Student_ID;
    const Subject_ID = location.state.Subject_ID;
    const Uploading_Status  = 'NOT UPLOADED';

    console.log(Student_ID);

    const [Assignment_No, setAssignment_No ] = useState('');
    const [Note, setNote ] = useState('')
    const [Doc, setDoc ] = useState('');

    
    

    const handleSubmit =  (e) => {
        e.preventDefault();
    

        const newsubmition = {
          Student_ID : Student_ID, 
          Assignment_No : Assignment_No,
          Subject_ID : Subject_ID,
          Note : Note,
          Uploading_Status :'UPLOADED',
          Doc : Doc,
        }
  
        try {
           axios.post(`http://localhost:3001/studentsubmited/${Student_ID}`, newsubmition)
          .then((response) => {
            console.log(response.data);
          })
        } catch (error) {
          console.log(error);
        }
          
    }
     

  return (


    <div>
        
                    
                    
                    <form onSubmit={handleSubmit}>
                
                     <div className="header">
                       <div className="assignment" >
                       <h1 className='Topic' >Submit The Assignment</h1>

                       <FileUpload
                        accept=".jpg,.png,.jpeg, .pdf"
                        multiple
                        value={Doc}
                        updateFilesCb={setDoc}
                        // onChange={(e) => setDoc(e.target.value)}
                    />

                                 <div className="form-group"></div>

                                 <label>Assignment number</label>
                                 <select name="Assignment_No"  required value={Assignment_No}  onChange={(e) => setAssignment_No(e.target.value)}>
                                     <option value="">Select Assignment </option>
                                     <option value="1">Assignment No 1</option>
                                     <option value="2">Assignment No 2</option>
                                     <option value="3">Assignment No 3</option>
                                     <option value="4">Assignment No 4</option>
                                     <option value="5">Assignment No 5</option>            
                                 </select>

                                                        
                                <label >Special Notice</label>
                                <input className='Note ' type="text" placeholder="description" name="Note" required  
                                value={Note}  onChange={(e) => setNote(e.target.value)} 
                            />

                                 <label>File</label>
                                
                    {/*                 <FileUpload
                                           accept=".jpg,.png,.jpeg .pdf"
                                           label="Profile Image(s)"
                                           multiple
                                           value={Doc}
                                          onChange={(e) => setDoc(e.target.value)}
                                          updateFilesCb={updateUploadedFiles}
                                         required
                                          />             */}

                         <button className='uplpadbtn'  type="submit">Upload the Assignment</button>
                       </div>

                     </div> 
                     </form>
                     
    </div>

  )
}

export default StudentSubmitton