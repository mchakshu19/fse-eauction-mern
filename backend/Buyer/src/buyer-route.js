const express = require('express');
const updateBid = require('./controllers/update-bid');
const placeBid = require('./controllers/place-bid');

const buyerRouter = express.Router();

buyerRouter.post('/place-bid', placeBid);

buyerRouter.put('/update-bid/:productId/:buyerEmailId/:newBidAmount', updateBid);

module.exports = { buyerRouter };
