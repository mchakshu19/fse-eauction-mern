const Product = require('../models/Product');
const Bid = require('../models/Bid');

const deleteProduct = async (req, res) => {
	try {
		const { productId } = req.params;
		const findProductResponse = await Product.findById(productId);
		if(!findProductResponse) {
			res.json(null);
			return;
		}
		if(findProductResponse && findProductResponse.bidEndDate < new Date()) {
			throw new Error('Product cannot be deleted after bid end date.')
		}
		const findBidResponse = await Bid.find({ productId });
		const bidLength = findBidResponse.length;
		if(bidLength > 0) {
			throw new Error(`Product canot be deleted as it has ${bidLength} bid(s) placed on it.`)
		}
		const deleteResponse = await Product.deleteOne({ _id: productId });
		res.json(deleteResponse);
	} catch(err) {
		res.send(`error: ${err}`);
	}

}

module.exports = deleteProduct;