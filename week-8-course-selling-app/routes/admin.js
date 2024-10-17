const {Router} = require('express');
const adminRouter=Router();

adminRouter.post("/signin", function(req, res) {
    res.json({
        message:"Sign up endpoint"
    })
})

adminRouter.post("/signup", function(req, res) {
    res.json({
        message:"Sign up endpoint"
    })
})

adminRouter.post("/course", function(req, res) {
    res.json({
        message:"Sign up endpoint"
    })
})

adminRouter.put("/course", function(req, res) {   // change the course
    res.json({
        message:"Sign up endpoint"
    })
})


adminRouter.put("/course/bulk", function(req, res) {   // change the course
    res.json({
        message:"Sign up endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}