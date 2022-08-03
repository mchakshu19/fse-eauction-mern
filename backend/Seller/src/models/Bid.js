const { model, Schema } = require('mongoose');

const BidSchema = new Schema({
	buyerId: {
        type: Schema.Types.ObjectId,
        alias: 'Buyer Id',
		ref: "Buyer",
        required: true
    },
	buyerEmailId: {
		type: String,
		required: true
	},
    productId: {
        type: Schema.Types.ObjectId,
        alias: 'Product Id',
		ref: "Product",
        required: true
    },
    bidAmount: {
        type: Number,
        alias: 'Bid Amount',
        required: true
    }
}, {
	collection: 'Bids'
});

const Bid = model('Bid', BidSchema);
module.exports = Bid;
