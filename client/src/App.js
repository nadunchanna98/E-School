import './App.css';
import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/navigation/Navbar';
import Header from './components/layout/Header';

function App() {

return (
    <div className="App">
        <Router>
           <Navbar/>
           <Header/>


          <Link to="/home">Home Page</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/login" exact element={<Login/>} />
          </Routes>
          
          
        </Router>
    </div>
  );
}

export default App;


//npm i axios 
//npm i react-router-dom 
//version 6 is deference
//for get input use library formik
//for vallidation -> npm i yup

//npm install react-bootstrap bootstrap


