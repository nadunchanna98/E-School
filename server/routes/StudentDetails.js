const express = require('express');
const router = express.Router();
const db = require("../Db");


const path = require('path');

router.get('/', async (req, res) => {
	res.sendFile(path.join(__dirname ));
});


//get route
router.get("/", async (req,res)=>{
       db.query("SELECT * FROM user", (err,result) => {
    if(err){
        console.log(err);
    }else{
        res.send(result); 
        console.log(err);          
    }
    });   
    
});



module.exports = router

