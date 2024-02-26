// const fs = require("fs");

// function srpreads(){
//     console.log("inside file");
//     return new Promise(function(resolve){
//         console.log("inside promise");
//         fs.readFile("one.txt","utf-8", function(err,data){
//             console.log("before resolve");
//             resolve(data);
//         });
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// srpreads().then(onDone);



function wait(n){
    return new Promise(function(resolve,reject){
        // let startTime = Date.now();
        // while(Date.now()-startTime <n*1000){}
        setTimeout(()=>{
            resolve()
        },n*1000);
        
        
    });
}
function onDone(data){
    console.log(data);
}
wait(10).then(onDone);
console.log("meeeee")