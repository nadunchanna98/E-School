/*const express = require('express');
const db = require('../models');
const {Register2} = require('../models');
const router = express.Router();

//get route
router.get("/", async (req,res)=>{
       const details = await Register2.findAll();
       res.json(details); 
});

//post route
router.post("/",async (req,res) =>{
    const new_student = req.body;

    db.query("SELECT * FROM register2s WHERE email = ? AND password = ?",
    new_student,
    (err,result) => {
        if(err){
            res.send({err: err});
        }
        if(result.length > 0){
            res.send(result);
        }else{
            res.send({message: "Wrong username/password combination!"});
        }
    }
    );
   
    res.json(new_student);
});


module.exports = router
*/