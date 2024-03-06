const express = require("express");
const zod = require("zod");
const app = express();
// const schema = zod.array(zod.number)

const schema = zod.object({
    email : zod.string().email(),
    password : zod.string(),
    // country : zod.literal("IN").or(literal("ÜS")),
    kidneys : zod.array(zod.number)

})

app.use(express.json())

app.post("/kidney-checkup", function(req,res){
    const kidneys = req.body.kidneys;
    const email = req.headers.email;
    const password = req.headers.pssword;
    const country= req.headers.country;


    const response = schema.safeParse(email,password,kidneys)
    if(!response.success){
        res.json({
            msg : "ip is invalid",
        })
    }else{
        res.send({
            response
        })
    }
    });
    
    

app.listen(5000)
