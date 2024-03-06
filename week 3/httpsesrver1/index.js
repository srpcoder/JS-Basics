const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json());
//fs.readFile("path","utf-7", ())
//route == path
//get, post, delete, put
// app.get('/', function(req,res){
//     res.json({
//         name : "Sriram",
//         id : 2
//     })
// })
// app.post('/convo',function(re,res){
//     console.log(req.headers);
//     res.send({
//         name: "hello",
//         id : 2
//     })
// })
app.post('/heppe',function(req,res){
    const message = req.body.message;
    res.send("sihdos");
})
app.get('/hisrp', function(req, res)  {
  res.send('Hello Worl!')
})

// app.listen(port)