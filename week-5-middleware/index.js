const express = require("express"); // expres is a chain of middleware

const app = express();

let requestCount=0;


function requestincrease(req, res,next) { // next function helps in calling the next function in the execution stack for example is realsumhandler
    requestCount++;
    console.log("total requests: " + requestCount);
    req.requestCount=requestCount;
    next();
}
function realsumhandler(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
}
//Another use of hanlding middleware

//app.use(requestincrease); // all the handlers after this line will use the middleware
app.get("/sum",requestincrease,realsumhandler); // requestincrease is the middleware function
/*
app.get("/sum",requestincrease, function(req, res) {
   // requestincrease(req, res);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});
*/

/*
app.get("/multiply", requestincrease,function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    //requestincrease(req, res);
    res.json({
        ans: a * b
    })
})
 */


app.listen(3000);