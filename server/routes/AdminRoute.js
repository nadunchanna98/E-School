const express = require('express');
const router = express.Router();
const db = require("../Db");

//get admin details 
router.get("/getemail", async (req,res)=>{
    db.query("SELECT Email FROM adminrole", (err,result) => {
 if(err){
     res.send(err);
     console.log(err);  
 }else{
     res.send(result);              
 }
 });   
 
});

//get student details by email
router.get("/details/email/:email", async (req,res)=>{
    const Email = req.params.email;
    db.query("SELECT * FROM adminrole WHERE Email = ?", Email, (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
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