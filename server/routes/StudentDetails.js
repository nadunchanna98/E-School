const express = require('express');
const router = express.Router();
const db = require("../Db");


const path = require('path');

router.get('/', async (req, res) => {
	res.sendFile(path.join(__dirname ));
});


//get route
router.get("/details", async (req,res)=>{
       db.query("SELECT * FROM student", (err,result) => {
    if(err){
        res.send(err);  
    }else{
        res.send(result);              
    }
    });   
    
});


//update
router.put("/update/:id ", (req,res) =>{
    const Student_ID = req.body.id;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Address = req.body.Address;
    const Gender = req.body.Gender;
    const Bdate = req.body.Bdate;
    const Phone_NO = req.body.Phone_NO;
    const Email = req.body.Email;
    const Grade = req.body.Grade;

   db.query("UPDATE  SET  student Fname = ?, Lname = ?, Address = ? , Gender = ?, Bdate = ?, Phone_NO = ?, Email = ?, Grade = ? WHERE Student_ID = ?",
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

//delete
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

