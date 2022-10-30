const express = require('express');
const router = express.Router();
const db = require("../Db");


const path = require('path');

router.get('/', async (req, res) => {
	res.sendFile(path.join(__dirname ));
});


//Student registation
router.post("/register", (req,res) =>{

    const Student_ID = req.body.Student_ID;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Gender = req.body.Gender;
    const Phone_NO = req.body.Phone_NO;
    const Grade = req.body.Grade;
    const Address = req.body.Address;
    const Bdate = req.body.Bdate;
    const Email = req.body.Email;
    const Password = req.body.Password;

   db.query("INSERT INTO student(Student_ID,Address,Bdate ,Fname,Lname,Grade,Phone_NO,Gender,Email,Password) VALUES (?,?,?,?,?,?,?,?,?,?)",
   [Student_ID,Address,Bdate ,Fname,Lname,Grade,Phone_NO,Gender,Email,Password],
   
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


//get all students details 
router.get("/details", async (req,res)=>{
       db.query("SELECT * FROM student", (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});

//get student details by id
router.get("/details/:id", async (req,res)=>{
    const Student_ID = req.params.id;
    db.query("SELECT * FROM student WHERE Student_ID = ?", Student_ID, (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});

//get student details by id
router.get("/details/oneteacher/:id", async (req,res)=>{
    const Teacher_ID = req.params.id;
    db.query("SELECT student.Fname,student.Lname,student.Grade ,student.Gender,student.Phone_NO ,student.Bdate ,student.Address,student.Email FROM student JOIN subjects ON subjects.Grade = student.Grade JOIN teacher ON teacher.Subject_ID = subjects.Subject_ID WHERE teacher.Teacher_ID = ?",
     Teacher_ID, (err,result) => {
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
    db.query("SELECT * FROM student WHERE Email = ?", Email, (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});

//get student names by ID
router.get("/names/:id", async (req,res)=>{
    const Student_ID = req.params.id;
    db.query("SELECT Fname,Lname FROM student WHERE Student_ID = ?", Student_ID, (err,result) => {
    if(err){
        res.send(err);
        console.log(err);  
    }else{
        res.send(result);              
    }
    });   
    
});



//update student by id
router.put("/update/:id", (req,res) =>{
    //console.log(req.params.id);  --ok
    const Student_ID = req.params.id;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const Address = req.body.Address;
    const Gender = req.body.Gender;
    const Bdate = req.body.Bdate;
    const Phone_NO = req.body.Phone_NO;
    const Email = req.body.Email;
    const Grade = req.body.Grade;

   db.query("UPDATE student SET Fname = ?, Lname = ?, Address = ? , Gender = ?, Bdate = ?, Phone_NO = ?, Email = ?, Grade = ? WHERE Student_ID = ?",
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

//delete by id
// router.delete("/delete/:Student_ID", (req,res) =>{
//     const Student_ID = req.body.Student_ID;
    
//     db.query("DELETE FROM student WHERE Student_ID = ?",[Student_ID],(err,result) => {
//         if(err){
//             res.send(err);
//         }else{
//             res.send(result);
//         }
//     }
//     )
 
//  }
//     );



router.delete("/delete/:Student_ID", (req, res) => {
    let  Student_ID = req.params.Student_ID;

    let sql = "DELETE FROM student WHERE Student_ID = ?";
    console.log("id: ", req.params.Student_ID);

    db.query(sql,[Student_ID], (err, result) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({ message: "error in deleting with id" });
        } else {
            console.log("deleted student with id: ", req.params.Student_ID);
            res.send(result);
        }
    });

});





module.exports = router

