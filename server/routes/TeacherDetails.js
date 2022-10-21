const express = require('express');
const router = express.Router();
const db = require("../Db");

//get all teacher details 
router.get("/details", async (req,res)=>{
    db.query("SELECT * FROM teacher", (err,result) => {
 if(err){
     res.send(err);
     console.log(err);  
 }else{
     res.send(result);              
 }
 });   
 
});

//get teacher details by id
router.get("/details/:id", async (req,res)=>{
    const Teacher_ID = req.params.id;
    db.query("SELECT * FROM teacher WHERE Teacher_ID = ?", Teacher_ID, (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);
        console.log(result);              
    }
    });   
    
});

//get student details by email
router.get("/details/email/:email", async (req,res)=>{
    const Email = req.params.email;
    db.query("SELECT * FROM teacher WHERE Email = ?", Email, (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});







//teacher registation
router.post("/register", (req,res) =>{

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



//delete by id
router.delete("/delete/:id", (req,res) =>{
    let ID = req.params.id;

    let sql = "DELETE FROM teacher WHERE Teacher_ID = ?";

    
    db.query(sql,[ID],(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    }
    )
 
 }
    );



module.exports = router