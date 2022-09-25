//const { request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

//middleware
app.use(express.json());
app.use(cors());

//Routers 
const registerRouter = require("./routes/Register");
//const loginRouter = require("./routes/Login");


//api routes
app.use("/register",registerRouter);
//app.use("/login",loginRouter);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "eschool",
});



app.listen(3001, () => {
    console.log("Server has started on port 3001");
});








/*
const db = require("./models");

//middleware
app.use(express.json());
app.use(cors());

//Routers 
const registerRouter = require("./routes/Register");
const loginRouter = require("./routes/Login");


//api routes
app.use("/register",registerRouter);
app.use("/login",loginRouter);

db.sequelize.sync().then(() =>{

    app.listen(3001, ()=>{
        console.log("Server is running on port 3001 ");
    });    
    
})


*/