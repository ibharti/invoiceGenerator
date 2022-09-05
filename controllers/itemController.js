const itemModel = require('../models/itemModel');

const getItemController = async (req, res) => {
    try {
        const items = await itemModel.find();
        res.status(200).send(items);


    } catch (error) {
        console.log(error);
    }


};


const postItemController = async (req, res) => {
    try {
        const newItemModel = new itemModel(req.body);
        await newItemModel.save();
        res.status(201).send('Item created');


    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }


};


module.exports = getItemController;
module.exports = postItemController;
