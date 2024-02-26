function clock(){
    let date = new Date();
    let Hours = date.getHours();
    let minute = date.getMinutes();
    let secs = date.getSeconds();
    let ampm = "";
    if(Hours >12){
        ampm = "PM";
    }
    else{
        ampm = "AM";
    }
    let time = Hours + ':'+minute +':'+ secs + ampm;
    console.log(time);
}


setInterval(clock,1000)