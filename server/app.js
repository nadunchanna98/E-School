const { request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const db = require("./models");

//middleware
app.use(express.json());
app.use(cors());

//Routers 
// const postRouter = require("./routes/Posts");
// const loginRouter = require("./routes/Login");
// const registerRouter = require("./routes/Register");


//api routes
// app.use("/posts",postRouter);
// app.use("/register",registerRouter);

db.sequelize.sync().then(() =>{

    app.listen(3001, ()=>{
        console.log("Server is running on port 3001 ");
    });    
    
})