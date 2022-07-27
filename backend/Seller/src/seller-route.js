const express = require('express');
const addProduct = require('./controllers/add-product');
const deleteProduct = require('./controllers/delete-product');
const showBids = require('./controllers/show-bids');

const sellerRouter = express.Router();

sellerRouter.post('/add-product', addProduct);

sellerRouter.get('/show-bids/:productId', showBids);

sellerRouter.delete('/delete/:productId', deleteProduct);

module.exports = { sellerRouter };
