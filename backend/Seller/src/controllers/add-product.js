const Product = require('../models/Product');
const Seller = require('../models/Seller');

const addProduct = async (req, res) => {
    try {
	const {
		productName, shortDescription, detailedDescription, category, startingPrice, bidEndDate, seller: sellerInfo,
	} = req.body;
	const seller = new Seller(sellerInfo);
	const saveSellerResponse = await seller.save();
	if(saveSellerResponse._id) {
		const product = new Product({
			productName, shortDescription, detailedDescription, category,
			startingPrice, bidEndDate, sellerId: saveSellerResponse._id,
			sellerEmailId: saveSellerResponse.email
		})
		const saveResponse = await product.save();
		res.json(saveResponse);
	} else {
		res.json(null);
	}	
	} catch(err) {
		console.log(err);
		res.send(`error: ${err}`);
	}
}

module.exports = addProduct;