import React from 'react'
import { useLocation ,useNavigate } from "react-router-dom";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import UploadFiles from "./components/upload-files.component";

const FileUploadTeacher = () => {

    const location = useLocation();
    const newApplication = location.state.newApplication;



  return (
    <div className="container" style={{ width: "600px" }}>
    <div style={{ margin: "20px" }}>
      <h3>bezkoder.com</h3>
      <h4>React upload Files</h4>
    </div>

    {/* <UploadFiles /> */}
  </div>
  )
}

export default FileUploadTeacher