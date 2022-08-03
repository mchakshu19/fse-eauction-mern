const { model, Schema } = require('mongoose');

const ProductSchema = new Schema({
	productName: {
		type: String,
		alias: 'Product Name',
		required: true,
		minLength: 5,
		maxLength: 30
	},
	shortDescription: {
		type: String,
		alias: 'Short Description'
	},
	detailedDescription: {
		type: String,
		alias: 'Detailed Description'
	},
	category: {
		type: String,
		alias: 'Category',
		enum: {
			values: ['Painting', 'Sculptor', 'Ornament'],
			message: 'The value - {VALUE} for Category is not supported.'
		}
	},
	startingPrice: {
		type: Number,
		alias: 'Starting Price',
	},
	bidEndDate: {
		type: Date,
		alias: 'Bid End Date',
		min: new Date(),
		message: 'Bid End Date should be future date.'
	},
	sellerId: {
        type: Schema.Types.ObjectId,
        alias: 'Seller Id',
		ref: "Seller",
        required: true
    },
	sellerEmailId: {
		type: String,
		required: true
	},
}, {
	collection: 'Products'
});

const Product = model('Product', ProductSchema);
module.exports = Product;
