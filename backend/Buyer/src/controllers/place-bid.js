const Bid = require('../models/Bid');
const Product = require('../models/Product');
const Buyer = require('../models/Buyer');

const placeBid = async (req, res) => {
    try {
	const {
		firstName,
        lastName,
        address,
        city,
        state,
        pin,
        phone,
        email,
        productId,
        bidAmount
	} = req.body;
    const findProductResponse = await Product.findOne({ _id: productId });
    console.log(findProductResponse);
    if(!findProductResponse) {
        throw new Error("Product Id must be of an existing product available for auction.");
    }
    if(findProductResponse && findProductResponse.bidEndDate < new Date()) {
        throw new Error("Bid cannot be placed after the bid end date.");
    }
    const findBidResponse = await Bid.find({ productId, email });
    if(Array.isArray(findBidResponse) && findBidResponse.length > 0) {
        throw new Error("More than one bid on a product by the same user is not allowed.");
    }
    const buyer = new Buyer({ firstName, lastName, address, city,
        state, pin, phone, email });
    const buyerSaveResponse = await buyer.save();
    if(buyerSaveResponse._id) {
        const bid = new Bid({
            buyerId: buyerSaveResponse._id,
            buyerEmailId: buyerSaveResponse.email,
            productId,
            bidAmount
        })
        const saveResponse = await bid.save();
        res.json(saveResponse);
    } else {
        res.json(null);
    }
	} catch(err) {
		res.send(`error: ${err}`);
	}
}

module.exports = placeBid;