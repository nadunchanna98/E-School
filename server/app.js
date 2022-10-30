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
const ResultsRoute = require("./routes/ResultRoute");
const loginRouter = require("./routes/Login");
const studentRouter = require("./routes/StudentDetails");
const teacherRouter = require("./routes/TeacherDetails");
const assignmentRouter = require("./routes/AssignmentRoute");
const subjectRouter  = require("./routes/SubjectRoute");
//const HomepageRouter = require("./routes/Homepage");
const studentSubmitedRoute = require("./routes/StudentSubmitedRoute");



// api routes
//app.use("/",registerRouter);
app.use("/login",loginRouter);
app.use("/students",studentRouter);
app.use("/teachers",teacherRouter);
app.use("/assignment",assignmentRouter);
app.use("/subjects",subjectRouter);
app.use("/studentsubmited",studentSubmitedRoute)
app.use("/result",ResultsRoute);
app.use("/admin",require("./routes/AdminRoute"));

//app.use("/",HomepageRouter);



app.listen(3001, () => {
    console.log("Server has started on port 3001");
});


//npm inite

//npm install express-session --save

/*when implement the user table in database make another 
attribute called role and make it as a string and give it a value of student or teacher or admin */


