function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(t)
        },t*1000)
    });

}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(t)
        },t*1000)
    });


}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(t)
        },t*1000)
    });


}

function calculateTime(t1, t2, t3) {
    let starttime = Date.now();
    return new Promise(function(resolve){
        wait1(t1)
        .then(()=>wait2(t2))
        .then(()=>wait3(t3))
        .then(()=>{
            const time = Date.now();
            console.log((time-starttime)/1000+ " seconds") ;
            
        })

    })

}

calculateTime(1,5,2);



