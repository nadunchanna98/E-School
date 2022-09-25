//const { request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();


//middleware
app.use(express.json());
app.use(cors());

//Routers 
const registerRouter = require("./routes/Register");
//const loginRouter = require("./routes/Login");


// app.post("/register", (req,res) =>{


//         const email = req.body.email;
//         const password = req.body.password;
    
//        db.query("INSERT INTO user(email,password) VALUES (?,?)",[email,password],
//        (err,result) => {
//            if(err){
//                console.log(err);
//            }else{
//                res.send("Values inserted");
//            }
//        }
//        )
//     });




// api routes
app.use("/register",registerRouter);
//app.use("/login",loginRouter);





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