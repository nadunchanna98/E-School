const express = require('express');
const router = express.Router();
const db = require("../Db");



//all student submitin details about one teacher
router.get("/byteacher/:id", async (req,res)=>{

    const Teacher_ID = req.params.id;

    db.query("SELECT Student_ID,teacher.Subject_ID,Assignment_No,Result,Note FROM results JOIN teacher ON results.Subject_ID = teacher.Subject_ID  WHERE teacher.Teacher_ID = ? ",[Teacher_ID],
    (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    }); 
    
});


//one student results about all subjects
router.get("/bystudent/:id", async (req,res)=>{

    const Student_ID = req.params.id;

    db.query("SELECT Subject_ID,Assignment_No,Result,Note FROM results WHERE Student_ID= ? ",[Student_ID],
    (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    }); 
    
});

// //post route
// router.post("/detailsoft", (req,res) =>{

//     const email = req.body.email;
//     const password = req.body.password;

//    db.query("INSERT INTO user(email,password) VALUES (?,?)",[email,password],
   
//    (err,result) => {
//        if(err){
//            console.log(err);
//        }else{
//            res.send("Values inserted");
//        }
//    }
//    )

// });






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

