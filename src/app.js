const express = require("express");

// create server
const app = express();

// create request handlers => has route information along with req and res. 
// app.use() will match all API calls to rote so best practice is app.HTTPMethod()
app.get("/user", (req, res) => {
    // we can read all the query parameters  using req.query
    console.log(req.query);
    res.send({
        "firstName": "Test First name",
        "lastName": "Test Last name"
    })
});

// request with parameters E.g. /user/101
app.get("/user/:userId", (req, res) => {
    // we can read all the parameters  using req.params
    console.log(req.params);
    res.send({
        "firstName": "Test First name",
        "lastName": "Test Last name"
    });
});

// trying multiple route handlers
// first way
app.use("/route", [(req, res, next) => {
    console.log("Route 1");
    // res.send("Route 1");
    next();
},
(req, res, next) => {
    console.log("Route 2");
    // res.send("Route 2");
    next();
}],
(req, res) => {
    console.log("Route 3");
    res.send("Route 3");
}
);
// second way
app.use("/route2", (req, res, next) => {
    console.log("Route 1");
    next();
});
app.use("/route2", (req, res, next) => {
    console.log("Route 2");
    res.send("Route 2");
});

// listen to requests to port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});