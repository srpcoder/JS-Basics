const express = require("express");

const app = express();

app.use(express.json());
app.post("/health-checkup", function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have" + kidneyLength + "kidneys");
});


//global catches when exceptions occurs and errors are not shown to end=users
app.use(function(err,req,res,next){
    res.json({
        msg : "sorry something wrong",
    })
});


app.listen(3000);
