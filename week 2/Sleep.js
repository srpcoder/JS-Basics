function sleep(milliseconds){
    let p = new Promise(function(resolve){
        let startTime = Date.now();
       
       while(Date.now()-startTime<milliseconds){}
        resolve("timeout");
    })
    return p;

}

sleep(5000);

