function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve()
        },t*1000)
    });

}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve()
        },t*1000)
    });

}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve()
        },t*1000)
    });

}

function calculateTime(t1, t2, t3) {
    const promises = [wait1(t1),wait2(t2),wait3(t3)];
    let starttime = Date.now();
    return Promise.all(promises).then(()=>{
        const time = Date.now()-starttime;
        console.log(time/1000);
    })

}
calculateTime(1,5,2);