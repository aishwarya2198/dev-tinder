const mongoose = require('mongoose');

// connect to db
const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aishwaryanuwal21:jWGi2p8P15qh9tut@cluster0.sgquk.mongodb.net/devTinder')
};

module.exports = {
    connectDB    
}