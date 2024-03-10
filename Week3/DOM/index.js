const express = require("express")
const cors = require("cors")

let app = express();
app.get("/sum",function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = a+b;
    res.send(c.toString());
});

app.listen(3000);