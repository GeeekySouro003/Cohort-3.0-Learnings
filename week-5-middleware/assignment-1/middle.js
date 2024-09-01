const express=require('express');
const bodyParser=require('body-parser');
const app = express();
/*
function middleware(req, res, next) {
    console.log('Method: ' + req.method);
    console.log('URL ' + req.url);
    console.log('HOSTNAME ' + req.hostname);
    console.log(new Date());

    next();
}




app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.use(middleware);

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});
*/

app.use(express.json()); // external middleware for parsing JSON data 
// in express if you want to send json data
// you need to parse the json data
app.post("/sum1",function(req, res) {
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
})

app.listen(3000);