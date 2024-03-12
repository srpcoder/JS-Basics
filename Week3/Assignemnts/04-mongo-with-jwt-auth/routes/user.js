const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db")
const jwt = require("jsonwebtoken");
const {secret} = require("../config")

// User Routes
router.post('/signup',  async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    })
    res.json({
        msg : "user created successfully"
    })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({username : username, password :password});
    if(user){
        const token = jwt.sign({username},secret);
        res.json({
            token : token
        })
    }
    else{
        res.status(411).json({
            msg : "user does not exist, kindly signup"
        })
    }


});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allcourses  = await Course.find({});
    res.json({
        courses : allcourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username =  req.username;
    console.log(username)
    await User.updateOne({username : username},
        {
           "$push":{
            purchasedCourses : courseId
           }
        })
        res.json({
            msg  : 'Course purchased successfully'
        })

});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username   : req.username
    })
   
    const courses = await Course.find({
        _id :{
            "$in" : user.purchasedCourses
        }
    })
    res.json({
       courses :  courses
    })

});

module.exports = router