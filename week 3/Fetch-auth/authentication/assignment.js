const express = require("express");
const jwt = require("jsonwebtoken");

const jwtPasscode =  "123456";

const app = express();
app.use(express.json());


const ALL_USERS = [
    {
        username : "srpmi001@gmail.com",
        password : "123",
        name : "sriram"
    },
    {
        username : "mohi@gmail.com",
        password : "123212",
        name : "mohana"

    },
    {
        username : "ilango@gmail.com",
        password : "1233321",
        name : "ilango"
    },
];

function userExists(username, password){
    let userExists = false;
    for(let i =0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password== password){
            userExists = true;
        }
    }
    return userExists;

}

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg : "User with the given credentials does not exist",
        })
    }
    else{
        var token = jwt.sign({username : username}, jwtPasscode);
        return res.json({
            token,
        })
    

    }

  
});

app.get("/users", function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPasscode);
        const username = decoded.username;
        res.json({
            users: ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false;
                }
                else{
                    return true;
                }
            })
        })


    }
    catch (err){
        return res.json({
            msg : "Invalid token",
        })
    }


})

app.listen(4000)