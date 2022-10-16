const express = require('express');
const router = express.Router();
const db = require("../Db");

//get all students details 
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

module.exports = router