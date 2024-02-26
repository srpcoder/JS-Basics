const fs = require("fs");
fs.readFile("one.txt","utf-8",function(err,data){
    console.log(data);
})
console.log("data")