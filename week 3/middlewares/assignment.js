const express = require("express");
// let starttime = new Date();
const app = express();
app.use(express.json());
// the above app.use is used to get the body in the post requst
//app.use(middleware)
// we basically use the above before requests


let numberofRequests = 0;
function calculatereq(req,res,next){
    numberofRequests++;
    console.log(numberofRequests);
    next();
}

function userMiddleware(req,res,next){
   
    starttime = new Date();
    if(username != "Sriram" && password!="pass"){
        res.json({
            msg: "creds does not match",
        })
       
    }
    else{
        next();
    }
};

function kidneyidmiddleware(req,res,next){
    if(kidneyID == 1 || kidneyID ===2){
        next();
    }
    else{
        res.status(400).json({
            msg : "Wrong Kidney ID",
        })
    }
};
function calculateTime(req,res,next){
    const endTime = new Date();
    let timetaken = endTime- starttime;
    res.json({
        timeTaken : timetaken/1000 + "s",
    })
   
}
app.use(calculatereq);
let starttime = new Date();

app.get("/kidney-checkup1", function(req, res){
    
    res.json({
        msg : "kidney is cool"
    });
});

app.use(calculateTime);
app.get("/kidney-checkup", function(req,res){
    const kidneyID = req.query.kidneyID;
    const username = req.headers.username;
    const password = req.headers.password;
    res.json({
        msg : "values stored"
    })
    
    
})








app.listen(3000);
