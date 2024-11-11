const express = require("express");
const {connectDB} = require("./config/database");
const {User} = require('./models/user');
// create server
const app = express();

// Inserting data to User model
app.post("/signup", async (req, res) => {
    const userObj = {
        firstName: "Aishwarya",
        lastName: "Nuwal",
        emailId: "aishwarya.nuwal@gmail.com",
        password: "aishwarya@123"
    };
    // Creating a new instance of the User model
    const user = new User(userObj); 
    try{
        await user.save();
        res.send("User added Successfully!");
    }
    catch(err){
        res.status(400).send("Error saving the user: "+ err.message);
    }
    
});

// Connecting to db, if success then listening to port 3000
connectDB().then(() => {
    console.log("DB Connection Established.");
    // listen to requests to port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
})
.catch((err) => {
    console.log("DB not connected!");
});