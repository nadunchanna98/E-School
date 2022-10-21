import './App.css';
import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/layout/navigation/Navbar';
import Header from './components/layout/Header';
import SlideShare from './pages/SlideShare';

import LoginStudent from './pages/LoginStudent';
import LoginTeacher from './pages/LoginTeacher';
import Main from './pages/Main';
import TeacherRegister from './pages/TeacherRegister';
import StudentRegister from './pages/StudentRegister';


import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';


import AssignmentDetails from './pages/Assignment/AssignmentDetails';
import StudentDetails from './pages/StudentDetail_List';
import TeacherDetail_List from './pages/TeacherDetail_List';
import SubjectDetails_List from './pages/subjects/SubjectDetails_List';


import Update from './pages/Update'; 
import UpdateTeacher from './pages/UpdateTeacher';


import AssignmentFormTeacher from './pages/Assignment/AssignmentFormTeacher';

import SubmitedDetailsOneStudent from './pages/student_submited/SubmitedDetailsOneStudent';
import Allstdnt_Submitions_of_1tchr from './pages/student_submited/Allstdnt_Submitions_of_1tchr';

import AllStudent_Results_Of_1Subject from './pages/Results/AllStudent_Results_Of_1Subject';
import ResultsUpdatebyTeachr from './pages/Results/ResultsUpdatebyTeachr';

function App() {

return (
    <div className="App">
        <Router>
        <Navbar/>
    
          <Routes>

              <Route path="/" exact element={<Main/>} />
              <Route path="/LoginTeacher" exact element={<LoginTeacher/>} />
              <Route path="/LoginStudent" exact element={<LoginStudent/>} />
              <Route path="/register/teacher" exact element={<TeacherRegister/>} />
              <Route path="/register/student" exact element={<StudentRegister/>} />


              <Route path="/teacherDashboard" exact element={<TeacherDashboard/>} />
              <Route path="/teachers" exact element={<TeacherDetail_List/>} />
              <Route path="/updateteacher" element={<UpdateTeacher/>}/>


              <Route path="/studentDashboard" exact element={<StudentDashboard/>} />
              <Route path="/update" element={<Update/>}/>
              <Route path="/students" exact element={<StudentDetails/>} />
              <Route path="/submiteddetailsoneStudent" exact element={<SubmitedDetailsOneStudent/>}/>
              <Route path="/allStudentsSubmitionsOfOneTeacher" exact element={<Allstdnt_Submitions_of_1tchr/>}/>
          
        
              <Route path="/assignmentDetails" exact element={<AssignmentDetails/>} />
              <Route path="/assignmentByTeacher" exact element={<AssignmentFormTeacher/>} />

              <Route path="/subjectsDetails" exact element={<SubjectDetails_List/>} />

              <Route path="/allStudentaesults0f1Subject" exact element={<AllStudent_Results_Of_1Subject/>} />
              <Route path="/resultsupdatebyt" exact element={<ResultsUpdatebyTeachr/>} />
          </Routes>
          
          
        </Router>
    </div>
  );
}

export default App;


//npx create-react-app client

//npm i axios 
//npm i react-router-dom 
//version 6 is deference
//for get input use library formik
//for vallidation -> npm i yup
//npm i react-use-file-upload   

//npm install react-bootstrap bootstrap
//npm install uuidv4 - for create unique id -see  teacher  register 


//update by id note working
//update teacher page not showing
//delete by id not working

