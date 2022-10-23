const express = require('express');
const router = express.Router();
const db = require("../Db");

//get assignment details by id
router.get("/details/:id", async (req,res)=>{

    const Teacher_ID = req.params.id;

    db.query("SELECT Assignment_No , assignment.Subject_ID , Chapter_No , Note , DueDate , DueTime , TotalMarks , Doc , Created_on FROM assignment JOIN teacher ON assignment.Subject_ID = teacher.Subject_ID  WHERE Teacher_ID = ?", [Teacher_ID], (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});


//get assignment details by student id
router.get("/details/student/:id", async (req,res)=>{

    const Student_ID = req.params.id;

    db.query("SELECT Assignment_No , assignment.Subject_ID , Chapter_No , Note , DueDate , DueTime , TotalMarks , Doc , Created_on FROM assignment JOIN subjects ON assignment.Subject_ID = subjects.Subject_ID JOIN student ON subjects.Grade = student.Grade  WHERE Student_ID = ?", [Student_ID], (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});



//get assignment details 
router.get("/details/", async (req,res)=>{

    const Teacher_ID = req.params.id;

    db.query("SELECT * FROM assignment ", (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});



//insert
router.post("/insert/:Subject_ID", (req,res) =>{

   const Chapter_No = req.body.Chapter_No;
    const Assignment_No = req.body.Assignment_No;
    const Subject_ID = req.params.Subject_ID;
    const Note = req.body.Note;
    const DueTime = req.body.DueTime;
    const DueDate = req.body.DueDate;
    const TotalMarks = req.body.TotalMarks;
    const Doc = req.body.file;

   db.query("INSERT INTO assignment(Chapter_No,Assignment_No,Note,DueTime,DueDate,TotalMarks,Doc,Subject_ID,Created_on) VALUES (?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP)",
   [Chapter_No,Assignment_No,Note,DueTime,DueDate,TotalMarks,Doc,Subject_ID],
   
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