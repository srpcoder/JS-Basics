const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db")
const jwt = require("jsonwebtoken");
const {secret} = require("../config")
// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username : username,
        password : password
    })
    res.json({
        msg : "user created successfully!"
    })
    // Implement admin signup logic
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user= await Admin.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        },secret)
        res.json({
            token  : token
        })

    }
    else{
        res.status(411).json({
            message  : "User not Found"
        })
    }
   

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const newCourse = await Course.create({
        title : title,
        description : description,
        price : price,
        imageLink : imageLink
    })
    console.log(newCourse)
    res.json({
        msg : 'Course created successfully',
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({

    })
    res.json({
        all_courses : courses,
    })

});

module.exports = router;