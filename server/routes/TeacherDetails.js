const express = require('express');
const router = express.Router();
const db = require("../Db");
const bcript = require('bcrypt'); //for hashing password


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



//get teacher details by email
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

    const encryptedPassword =  bcript.hashSync(req.body.Password, 10);

    const Role = req.body.Role;
    const Teacher_ID = req.body.Teacher_ID;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Gender = req.body.Gender;
    const PhoneNO = req.body.PhoneNO;
    const Grade = req.body.Grade;
    const Subject_ID = req.body.SubjectID;
    const Email = req.body.Email;
    const Password = encryptedPassword;

    if(Role == "Teacher"){

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


    }else{

        db.query("INSERT INTO adminrole(IsAdmin,Teacher_ID,Subject_ID,Fname,Lname,Grade,Phone_NO,Gender,Email,Password) VALUES (?,?,?,?,?,?,?,?,?,?)",
        [Role,Teacher_ID,Subject_ID,Fname,Lname,Grade,PhoneNO,Gender,Email,Password],
        (err,result) => {
            if(err){
                console.log(err);
                res.send(err);
            }else{
                res.send("Values inserted");
            }
        }
        )


    }
 

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


//update teacher by id
router.put("/update/:id", (req,res) =>{

    const Teacher_ID = req.params.id;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Gender = req.body.Gender;
    const Phone_NO = req.body.Phone_NO;
    const Grade = req.body.Grade;
    const Subject_ID = req.body.Subject_ID;
    const Email = req.body.Email;
    const Password = req.body.Password;

   db.query("UPDATE teacher SET Subject_ID = ?, Fname = ?, Lname = ?, Grade = ?, Phone_NO = ?, Gender = ?, Email = ?, Password = ? WHERE Teacher_ID = ?",
   [Subject_ID,Fname,Lname,Grade,Phone_NO,Gender,Email,Password,Teacher_ID],
   (err,result) => {
       if(err){
           console.log(err);
           res.send(err);
       }else{
           res.send(result);
       }
   }
   )
});


module.exports = router