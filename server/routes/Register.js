const express = require('express');
const router = express.Router();
const db = require("../Db");


const path = require('path');

router.get('/', async (req, res) => {
	res.sendFile(path.join(__dirname ));
});



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

//teacher registation
router.post("/teacher", (req,res) =>{

    const Teacher_ID = req.body.Teacher_ID;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Gender = req.body.Gender;
    const PhoneNO = req.body.PhoneNO;
    const Grade = req.body.Grade;
    const Subject_ID = req.body.SubjectID;
    const Email = req.body.Email;
    const Password = req.body.Password;

   db.query("INSERT INTO teacher(Teacher_ID,Subject_ID,Fname,Lname,Grade,Phone_NO,Gender,Email,Password) VALUES (?,?,?,?,?,?,?,?,?)",
   [Teacher_ID,Subject_ID,Fname,Lname,Grade,PhoneNO,Gender,Email,Password],
   (err,result) => {
       if(err){
           console.log(err);
           res.send(err);
       }else{
           res.send("Values inserted");
       }
   }
   )


});

//Student registation
router.post("/student", (req,res) =>{

    const Student_ID = req.body.Student_ID;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Gender = req.body.Gender;
    const PhoneNO = req.body.PhoneNO;
    const Grade = req.body.Grade;
    const Address = req.body.Address;
    const Bdate = req.body.Bdate;
    const Email = req.body.Email;
    const Password = req.body.Password;

   db.query("INSERT INTO student(Student_ID,Address,Bdate ,Fname,Lname,Grade,Phone_NO,Gender,Email,Password) VALUES (?,?,?,?,?,?,?,?,?,?)",
   [Student_ID,Address,Bdate ,Fname,Lname,Grade,PhoneNO,Gender,Email,Password],
   
   (err,result) => {
       if(err){
           console.log(err);
           res.send(err);
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

