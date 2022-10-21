const express = require('express');
const router = express.Router();
const db = require("../Db");


//login as student
router.post("/student", (req,res) =>{

    const email = req.body.email;
    const password = req.body.password;


//    db.query(
//     "SELECT * FROM user WHERE email = ? AND password = ?",
//    (err,result) => {
//        if(err){
//             console.log(err);
//             console.log({message : "Wrong email or password !"} );
//        }else{
//            res.send({message : "logged in"});
//        }
//    }
//    )

// Ensure the input fields exists and are not empty
if (email && password) {

    // Execute SQL query that'll select the account from the database based on the specified email and password
    db.query('SELECT * FROM student WHERE Email = ? AND Password = ?', [email, password], (error, results) => {
       
        // If there is an issue with the query, output the error
        if (error) throw error;

        // If the account exists
        if (results.length > 0) {

            // Authenticate the user
            req.session.loggedin = true;
            req.session.email = email;

            // Redirect to home page
           
            res.send(results);

        } else {
            res.send({message : 'Incorrect email and/or Password!'});
        }			
        res.end();
    });
} else {
    res.send({message : 'Please enter email and Password!'});
    res.end();
}


});


//login as Teacher
router.post("/teacher", (req,res) =>{

    const email = req.body.email;
    const password = req.body.password;


if (email && password) {

    
    db.query('SELECT * FROM teacher WHERE Email = ? AND Password = ?', [email, password], (error, results) => {
       
        if (error) throw error;
        if (results.length > 0) {

            // Authenticate the user
            req.session.loggedin = true;
            req.session.email = email;
           
            res.send({results})
            

        } else {
            res.send({message : 'Incorrect email and/or Password!'});
        }			
        res.end();
    });
} else {
    res.send({message : 'Please enter email and Password!'});
    res.end();
}


});




module.exports = router
































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