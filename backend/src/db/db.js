const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to db");
    } catch (err) {
        console.log("Mongodb connection error:", err);
    }
}


module.exports = connectDB;