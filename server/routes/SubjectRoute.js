const express = require('express');
const router = express.Router();
const db = require("../Db");

// //get assignment details by id
// router.get("/details/:id", async (req,res)=>{

//     const Teacher_ID = req.params.id;

//     db.query("SELECT Assignment_No , assignment.Subject_ID , Chapter_No , Note , DueDate , DueTime , TotalMarks , Doc , Created_on FROM assignment JOIN teacher ON assignment.Subject_ID = teacher.Subject_ID  WHERE Teacher_ID = ?", [Teacher_ID], (err,result) => {
//     if(err){
//         res.send(err);
//         console.log(err);  
//     }else{
//         res.send(result);              
//     }
//     });   
    
// });

//get assignment details 
router.get("/details/", async (req,res)=>{

    const Teacher_ID = req.params.id;

    db.query("SELECT * ,teacher.Fname,teacher.Lname FROM subjects JOIN teacher ON teacher.Teacher_ID = subjects.Teacher_ID ", (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});




module.exports = router