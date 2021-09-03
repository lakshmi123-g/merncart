require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/shop1", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
    
        });

        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
};

module.exports = connectDB;
