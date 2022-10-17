const express = require('express');
const router = express.Router();
const db = require("../Db");


const path = require('path');

router.get('/', async (req, res) => {
	res.sendFile(path.join(__dirname ));
});


//Student registation
router.post("/register", (req,res) =>{

    const Student_ID = req.body.Student_ID;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Gender = req.body.Gender;
    const Phone_NO = req.body.Phone_NO;
    const Grade = req.body.Grade;
    const Address = req.body.Address;
    const Bdate = req.body.Bdate;
    const Email = req.body.Email;
    const Password = req.body.Password;

   db.query("INSERT INTO student(Student_ID,Address,Bdate ,Fname,Lname,Grade,Phone_NO,Gender,Email,Password) VALUES (?,?,?,?,?,?,?,?,?,?)",
   [Student_ID,Address,Bdate ,Fname,Lname,Grade,Phone_NO,Gender,Email,Password],
   
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


//get all students details 
router.get("/details", async (req,res)=>{
       db.query("SELECT * FROM student", (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});

//get student details by id
router.get("/details/:id", async (req,res)=>{
    const Student_ID = req.params.id;
    db.query("SELECT * FROM student WHERE Student_ID = ?", Student_ID, (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});




//update student by id
router.put("/update/:id", (req,res) =>{
    const Student_ID = req.params.id;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Address = req.body.Address;
    const Gender = req.body.Gender;
    const Bdate = req.body.Bdate;
    const Phone_NO = req.body.Phone_NO;
    const Email = req.body.Email;
    const Grade = req.body.Grade;

   db.query("UPDATE student SET Fname = ?, Lname = ?, Address = ? , Gender = ?, Bdate = ?, Phone_NO = ?, Email = ?, Grade = ? WHERE Student_ID = ?",
   [Fname,Lname,Address,Gender,Bdate,Phone_NO,Email,Grade,Student_ID],
   (err,result) => {
       if(err){
           res.send(err);
       }else{
           res.send(result);
           
       }
   }
   )

}
);

//delete by id
router.delete("/delete/:Student_ID", (req,res) =>{
    const Student_ID = req.body.Student_ID;
    
    db.query("DELETE FROM student WHERE Student_ID = ?",[Student_ID],(err,result) => {
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

