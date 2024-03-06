const express = require("express")
const z = require("zod")

const app = express();

function validateInputs(obj){
    const schema= z.object({
        email: z.string().email(),
        password: z.string().min(8)

    })
    const response = schema.safeParse(obj);
    return response;

}

app.post("/login", function(req, res){
    const response = validateInputs(req.body)
    if(!response.success){
        res.json({
            msg : "cool"
        })

    }
    else{
        res.json({
            msg : "nope"
        })
    }

})
app.listen(2000);