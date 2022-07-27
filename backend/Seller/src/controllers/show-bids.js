const { Types } = require('mongoose');
const Product = require('../models/Product');
const Bid = require('../models/Bid');
// const Buyer = require('../models/Buyer');

const showBids = async (req, res) => {
	try {
		const findProductResponse =  await Product.findOne(
			{ _id: req.params.productId },
			'productName shortDescription detailedDescription category bidEndDate startingPrice');
		const findBidResponse = await Bid.aggregate([
			{
				$match: {
					$expr: {
						$eq: [ "$productId", Types.ObjectId(req.params.productId) ]
					}
				}
			},
			{
				$lookup: {
					from: "Buyers",
					localField: 'buyerId',
					foreignField: '_id',
					as: 'buyer'
				}
			}
		]).sort({ bidAmount: 'desc' });
		if(findProductResponse && Array.isArray(findBidResponse)) {
			res.json({ ...findProductResponse._doc, bidList: findBidResponse });
		} else {
			res.json(null);
		}
	} catch(err) {
		res.send(`error: ${err}`);
	}
}

module.exports = showBids;