const { Router } = require("express");
const {Admin} = require("../db");
const{Course} = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();

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
    const allCourses = await Course.find({});
    res.json({
        allCourses
    })
});

module.exports = router;