const { request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
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