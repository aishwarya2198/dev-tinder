const mongoose = require('mongoose');

// Create Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: "String",
        required: true,
        minLength: 4,
        maxLength: 100
    },
    lastName: {
        type: "String"
    },
    emailId: {
        type: "String",
        required: true,
        lowercase: true
    },
    password: {
        type: "String"
    },
    age: {
        type: "Number",
        min: 18
    },
    gender: {
        type: "String",
        validate(value){
            if(!["male", "female"].includes(value)){
                throw new Error("Invalid gender");
            }
        }
    },
    photoUrl: {
        type: "String",
        default: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
    },
    skills: {
        type: ["String"]
    }
}, {
    timestamps: true
});

// Create Model - it's like a class and used to create new instances
const User = mongoose.model('User', userSchema);

module.exports = {
    User
}