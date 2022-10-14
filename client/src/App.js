import './App.css';
import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Register from './pages/Register';
import TeacherRegister from './pages/TeacherRegister';
import StudentRegister from './pages/StudentRegister';
import Login from './pages/Login';
import StudentDetails from './pages/StudentDetail_List';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/navigation/Navbar';
import Header from './components/layout/Header';
import SlideShare from './pages/SlideShare';
import Teacher_Dashboard from './pages/Teacher_Dashboard';
import Update from './pages/Update';

function App() {

return (
    <div className="App">
        <Router>
           <Navbar/>
           <Header/>
           <SlideShare/>


          <Link to="/home">Home Page</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          <Routes>
            <Route path="/update" element={<Update/>}/>
          <Route path="/" exact element={<Teacher_Dashboard/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/register/teacher" exact element={<TeacherRegister/>} />
          <Route path="/register/student" exact element={<StudentRegister/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/students" exact element={<StudentDetails/>} />
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

//npm install react-bootstrap bootstrap
//npm install uuidv4 - for create unique id -see  teacher  register 


