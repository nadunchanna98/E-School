const express = require('express');
const router = express.Router();
const db = require("../Db");

//get assignment details by id
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

//get assignment details 

router.get("/details/", async (req,res)=>{

    const Teacher_ID = req.params.id;

    db.query("SELECT * FROM subjects ", (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});


// });

module.exports = router