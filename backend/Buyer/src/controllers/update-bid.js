const Bid = require('../models/Bid');
const Product = require('../models/Product');

const updateBid = async (req, res) => {
    try {
        const { productId, buyerEmailId, newBidAmount} = req.params;
        const findProductResponse = await Product.findById(productId);
		if(!findProductResponse) {
			res.json(null);
			return;
		}
		if(findProductResponse && findProductResponse.bidEndDate < new Date()) {
			throw new Error('Bid amount cannot be updated after bid end date.')
		}
        const bidUpdateResponse = await Bid.findOneAndUpdate({
            productId,
            email: buyerEmailId
        }, { bidAmount: newBidAmount });
        res.json(bidUpdateResponse);
	} catch(err) {
		res.send(`error: ${err}`);
	}
}

module.exports = updateBid;