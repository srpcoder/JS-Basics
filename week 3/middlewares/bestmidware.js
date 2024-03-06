const express = require("express");

const app = express();
app.use(express.json());
// the above app.use is used to get the body in the post requst
//app.use(middleware)
// we basically use the above before requests

app.get("/kidney-checkup", function(req,res){
    const kidneyID = req.query.kidneyID;
    const username = req.headers.username;
    const password = req.headers.password;
})
let numberofRequests = 0;
function calculatereq(req,res,next){
    numberofRequests++;
    console.log(numberofRequests);
    next();
}

function userMiddleware(req,res,next){
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
app.use(calculatereq);
app.get("/kidney-checkup", userMiddleware,kidneyidmiddleware, function(req, res){
    res.json({
        msg : "kidney is cool"
    });
});

app.listen(3000);
