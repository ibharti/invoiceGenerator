const mongoose = require("mongoose");
require('colors')

//connect DB func
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected ${conn.connection.host}`);

    }
    catch (error) {
        console.log(`Error:${error.message}`.bgRed);
        process.exit(1);
    }
}
module.exports = connectDB;