///////////////////////////////////////////////////////////////////////-->>>>>callback functions
// function square(n){
//     return n*n;

// }
// function cube(n){
//     return n*n*n;
// }
// // function sumofSquares(x,y){
// //     let square1 = square(a);
// //     let square2 = square(b);
// //     return square1+square2;


// // }
// // function sumofcubes(x,y){
// //     let square1 = cube(x);
// //     let square2 = cube(y);
// //     return square1+square2;


// // }
// function sum(x,y,func){
//     let square1 = func(x);
//     let square2 = func(y);
//     return square1 + square2;
// }
// let ans = sum(1,3,square);
// console.log(ans);

//////////////////////////////////////////////->>>>> async functions
const fs = require("fs");

fs.readFile("one.txt","utf-8",(data,err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})

