const fs = require("fs");
let filepath = "one.txt";
let filedata;
fs.readFile(filepath,"utf-8",(err, data)=>{
    if(err){
        console.error(err);
        return;
    } 
    filedata = data;
    let resfiledata = filedata.replace(/\s+/g,' ').trim();
    fs.writeFile(filepath,resfiledata,(err)=>{
        if(err) throw err;
    })
    
})
