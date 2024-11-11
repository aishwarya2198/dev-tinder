const mongoose = require('mongoose');

// Create Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: "String"
    },
    lastName: {
        type: "String"
    },
    emailId: {
        type: "String"
    },
    password: {
        type: "String"
    },
    age: {
        type: "Number"
    }
});

// Create Model - it's like a class and used to create new instances
const User = mongoose.model('User', userSchema);

module.exports = {
    User
}