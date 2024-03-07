const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "1234566";

mongoose.connect("mongodb+srv://admin:Sriram100@cluster0.x7vsasi.mongodb.net/Users");

const User =  mongoose.model("User" ,{
    name : String,
    username : String,
    password : String
});

const app = express();
app.use(express.json());

function userExists(username, password){

}
app.post("/signup", async function(req,res){
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    const existingUser = await User.findOne({username :username});
    if(existingUser){
        res.status(400).send("Username already exists");
    }

    const newuser = new User({name : name, username : username, password : password});
    newuser.save();
    res.json({
        msg : "User Created Successfully!",
    })
    
})
app.post("/signin", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({username :username});
    if(existingUser){
    var token = jwt.sign({username : username}, jwtPassword);
    res.json({
        token,
    })
        
    }
    else{
        res.status(400).send("Oops something wrong");
    }

    
    
});

app.get("/usersdata", async function(req, res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        const data = await User.findOne({username : username});
        res.json({
            data
        })

    }catch{
        res.json({
            msg : "wrong token" 
        })
    }
   

})



app.listen(3000);
