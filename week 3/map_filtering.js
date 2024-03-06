//  const arr = [1,2,4,3,5];
 const newarr=[];
//  for(let i = 0;i<arr.length;i++){
//     newarr.push(arr[i]*2);

//  }
//  for(let i=0;i<newarr.length;i++){
//     console.log(newarr[i]);
//  }
// console.log(newarr);

 //we are basically learning map which takes an aray and a transformation fucnio
//  function transform(i){
//     return i*2;
//  }
//  const ans =newarr.map(transform);
// console.log(ans);

//create a map funciton

// filtering
// gviven an array try to remove the odd values from the array and return the even values
const arr1 =[1,2,3,4,5,6];
function filteringLogic(n){
    if(n%2 ==0) return true;
    else return false;
}
const ans1 = arr1.filter(function (n){
    if(n%2 ==0) return true;
    else return false;
});
console.log(ans1);
console.log("Sriam".startsWith("s"));

// filtering and mapping logic are important while implementing a large set of arrays i.e.., especially during development of large wreb application.




