function createCourseRoutes(app) {
    app.get('/course/purchase', function(req, res) {

        res.json({
            message:"Signup endpoint"
        })
    });
    
    
    app.get('/course/preview', function(req, res) {
    
        res.json({
            message:"Signup endpoint"
        })
    });
    
}

module.exports ={
    createCourseRoutes:createCourseRoutes
}