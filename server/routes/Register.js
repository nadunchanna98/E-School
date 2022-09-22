const express = require('express');
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
   await Register2.create(new_student);
    res.json(new_student);
});


module.exports = router
