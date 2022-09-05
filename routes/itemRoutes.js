const express = require('express');

const getItemController = require('../controllers/itemController');
const postItemController = require('../controllers/itemController');

const router = express.Router();
// defining routes

//getting
router.get('/get-item', getItemController);

//adding
router.post('/add-item', postItemController);



module.exports = router;
