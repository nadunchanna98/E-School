import './App.css';
import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';

function App() {

return (
    <div className="App">
        <Router>

         
          <Link to="/">Home Page</Link>
          <Link to="/login">Login</Link>

          <Routes>
          <Route path="/" exact element={<Homepage/>} />
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