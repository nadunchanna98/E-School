//const { request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();                // initialize express
const session = require('express-session');
const path = require('path');

app.use(session({
	secret: 'secret',    //change the secret key
	resave: true,
	saveUninitialized: true
}));





//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
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

//npm install express-session --save


//register form - add phone no




