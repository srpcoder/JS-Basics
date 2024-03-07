const mongoose = require("mongoose");

mongoose.connect("")

//
const cat = mongoose.model('Users',{
    name : String,
    email : String

});
const newUser = new cat({name : "Sriram", email : "srpmi001@gmail.com"});
newUser.save().then(()=> console.log("saved the data"));
