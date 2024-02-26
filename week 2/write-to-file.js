const fs = require("fs");

let data = "po le bonda";

fs.writeFile("write.txt",data,(err)=>{
    if(err) throw err;
})

