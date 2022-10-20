import './App.css';
import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/layout/navigation/Navbar';
import Header from './components/layout/Header';
import SlideShare from './pages/SlideShare';


import Login from './pages/Login';
import Register from './pages/Register';
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

function App() {

return (
    <div className="App">
        <Router>
        <Navbar/>
           <Header/>
           <SlideShare/>

          <Link to="/"> Login    </Link>
          <Link to="/register"> Register    </Link>
          <Link to="/assignmentByTeacher"> Assignment    </Link>
          <Link to="/assignmentDetails"> Assignment details    </Link>  {/* //only for teacher id*/ }
          <Link to="/subjectsDetails" > Subjects Details    </Link>
          <Link to="/studentDashboard" > Student Dashboard    </Link>
          <Link to="/teacherDashboard" > Teacher Dashboard    </Link>


          <Routes>
    
              <Route path="/" exact element={<Login/>} />
              <Route path="/register" exact element={<Register/>} />
              <Route path="/register/teacher" exact element={<TeacherRegister/>} />
              <Route path="/register/student" exact element={<StudentRegister/>} />


              <Route path="/teacherDashboard" exact element={<TeacherDashboard/>} />
              <Route path="/teachers" exact element={<TeacherDetail_List/>} />
              <Route path="/updateteacher" element={<UpdateTeacher/>}/>


              <Route path="/studentDashboard" exact element={<StudentDashboard/>} />
              <Route path="/update" element={<Update/>}/>
              <Route path="/students" exact element={<StudentDetails/>} />
              <Route path="/submiteddetailsoneStudent" exact element={<SubmitedDetailsOneStudent/>}/>
          
        
              <Route path="/assignmentDetails" exact element={<AssignmentDetails/>} />
              <Route path="/assignmentByTeacher" exact element={<AssignmentFormTeacher/>} />

              <Route path="/subjectsDetails" exact element={<SubjectDetails_List/>} />

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

