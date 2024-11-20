const express = require("express");
const {connectDB} = require("./config/database");
const {User} = require('./models/user');
// create server
const app = express();

// middleware to convert JSON from api to JS object 
app.use(express.json());

// Inserting data to User model
app.post("/signup", async (req, res) => {
    // read req body enter by user
    const userObj = req.body;
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

// Get user by email
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try{
        const users = await User.find({emailId: userEmail});
        if(users.length === 0){
            res.status(404).send("User not found");
        } else{
            res.send(users);
        }
    }
    catch(err){
        res.status(400).send("Something went wrong!");
    }
});

// Feed API - GET /feed - get all users from the db
app.get("/feed", async (req, res) => {
    try{
        const users = await User.find({});
        res.send(users);
    }
    catch(err){
        res.status(400).send("Something went wrong!");
    }
});

// Delete a user
app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try{
        await User.findByIdAndDelete(userId);
        res.send("User deleted Successfully!");
    }
    catch(err){
        res.status(400).send("Something went wrong!");
    }
});

// Update a user
app.patch("/user", async (req, res) => {
    const data = req.body;
    const userId = data.userId;
    try{
        const user = await User.findByIdAndUpdate(userId, data, {returnDocument: "after"});
        console.log(user);
        res.send("User updated successfully.");
    }catch(err){
        res.status(400).send("Something went wrong!");
    }
})

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