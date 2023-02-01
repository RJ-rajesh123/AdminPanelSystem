const express = require('express');
const cors=require("cors"); //cors() is used for connecting frontend to backend
var jwt = require('jsonwebtoken');
const jwtKey="project"; //private key
const app = express();
const port=5000;
require("./db/connection");
const Register=require("./models/register");
app.use(express.json());
app.use(cors());

/////////////api for registration//////////////
app.post('/register', async(req,res)=> {
    const register= new Register(req.body);
    const data = await register.save();
    res.send(data);
    });

///////////////////////fetch api////////////////
    app.get('/fetch', async(req,res)=> {
       let data=await Register.find();
        res.send(data);
        });

/////////////////////delete api/////////////////
app.delete('/delete/:id', async(req,res)=> {
    let data=await Register.deleteOne({_id:req.params.id});
     res.send(data);
     }); 
     
     
/////////////get particular user Details/////////////////
app.get('/update/:id', async(req,res)=> {
    let result=await Register.findOne({_id:req.params.id});
     res.send(result);
     });  
     
     
///////////////////update api///////////////////////////////
app.put('/update/:id',async(req,res)=>{
    let result = await Register.updateOne(
        {_id:req.params.id},
        {$set:req.body}
    );
   res.send(result); 
})


///////////////Login Api////////////////////
app.post('/login',async(req,res)=>{
    if(req.body.email && req.body.password){   //if we enter email and password 
        let user= await Register.findOne(req.body); //then its all information shown and we store in variable user
        if(user){
                jwt.sign({user},jwtKey,{expiresIn:"1h"},(err,token)=>{
                     if(err){
                         res.send({result:"Something went wrong"})
                     }
                      else{
                          res.send({user,auth:token})
                       }
                })
        }
        else{           //if we enter wrong email and password
             res.send({result:"No user found"})
        }
    }
    else{   // if nothing is entered i.e we donot enter email & password  also if we enter only one detail ....then...bcoz we are using && operator so we have to enter both details
        res.send("Try Again!");
    }
})


app.listen(port,()=>{
 console.log(`App running on port ${port}`)
 console.log(`http://localhost:${port}`)

})