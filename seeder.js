const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/config')
const itemModel = require('./models/itemModel')
const items = require('./utils/data')

dotenv.config()
connectDB()

const importDB = async () => {
    try {
        await itemModel.deleteMany()
        const itemsData = await itemModel.insertMany(items)
        console.log('imported success')
        process.exit()


    } catch (error) {
        console.log(`Error ${error}`)
        process.exit(1)
    }

};
importDB();
