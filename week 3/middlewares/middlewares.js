const express = require("express");

const app = express();
app.get("/health-checkup", function(req, res){

    const kidneyID =req.query.kidneyID;
    //authentication
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "Sriram" && password!= "pass" ){
        res.status(403).json({
            msg: "user does'nt exists",
        })
    }
    else{
        if(kidneyID === 1 || kidneyID === 2){
            res.json({
                msg : "Yor kidney is fine",
            })
        }
        else{
            res.json({
                msg : "wrong input",
            })

        }
        
    }
  
});

app.listen(4000);