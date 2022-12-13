const express = require('express');
const router = express.Router();
const db = require("../Db");

//all assignment submition details of one student
router.get("/details/:id", async (req,res)=>{

    const Student_ID = req.params.id;

    db.query("SELECT * FROM student_submited WHERE Student_ID = ?", [Student_ID], (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});

//all assignment submition details of all students
router.get("/details/", async (req,res)=>{

    db.query("SELECT * FROM student_submited ", (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});


//all student submitin details about one teacher
router.get("/detailsof/:id", async (req,res)=>{

    const Teacher_ID = req.params.id;

    db.query("SELECT * FROM student_submited JOIN subjects ON student_submited.Subject_ID = subjects.Subject_ID JOIN student ON student_submited.Student_ID = Student.Student_ID  WHERE subjects.Teacher_ID = ? ",[Teacher_ID], (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});


module.exports = router