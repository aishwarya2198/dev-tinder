const express = require("express");

// create server
const app = express();

// create request handlers => has route information along with req and res
app.use("/test", (req, res) => {
    res.send("Hello World from Test");
});
app.use("/hello", (req, res) => {
    res.send("Hello")
});
app.use("/", (req, res) => {
    res.send("Hello World from Dashboard!");
});

// listen to requests to port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});