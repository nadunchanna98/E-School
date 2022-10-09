const express = require('express');
const router = express.Router();
const db = require("../Db");


//get route
router.get("/", async (req,res)=>{
       db.query("SELECT * FROM user", (err,result) => {
    if(err){
        console.log(err);
    }else{
        res.send(result);           
    }
    });   
    
});


//post route
router.post("/", (req,res) =>{

    const email = req.body.email;
    const password = req.body.password;


   db.query("INSERT INTO user(email,password) VALUES (?,?)",[email,password],
   (err,result) => {
       if(err){
           console.log(err);
       }else{
           res.send("Values inserted");
       }
   }
   )
});


module.exports = router















// const express = require('express');
// const {Register2} = require('../models');
// const router = express.Router();

// //get route
// router.get("/", async (req,res)=>{
//        const details = await Register2.findAll();
//        res.json(details); 
// });

// //post route
// router.post("/",async (req,res) =>{
//     const new_student = req.body;
//    await Register2.create(new_student);
//     res.json(new_student);
// });

