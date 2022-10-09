//const { request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();                // initialize express



//middleware
app.use(express.json());
app.use(cors());

//Routers 
const registerRouter = require("./routes/Register");
const loginRouter = require("./routes/Login");
//const HomepageRouter = require("./routes/Homepage");


// api routes
app.use("/register",registerRouter);
app.use("/login",loginRouter);
//app.use("/",HomepageRouter);



app.listen(3001, () => {
    console.log("Server has started on port 3001");
});

//login make but not working yet
// login status also not working yet


//npm install react-bootstrap bootstrap