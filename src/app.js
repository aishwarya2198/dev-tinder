const express = require("express");

// create server
const app = express();

// create request handlers => has route information along with req and res. 
// app.use() will match all API calls to rote so best practice is app.HTTPMethod()
app.get("/test", (req, res) => {
    res.send("GET call")
})
app.post("/test", (req, res) => {
    res.send("POST call")
})
app.delete("/test", (req, res) => {
    res.send("DELETE call")
})
app.use("/test", (req, res) => {
    res.send("Hello World from Test");
});


// listen to requests to port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});