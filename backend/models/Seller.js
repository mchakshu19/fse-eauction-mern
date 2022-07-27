const { model, Schema } = require('mongoose');

const SellerSchema = new Schema({
	firstName: {
		type: String,
		alias: 'First Name',
		required: true,
		minLength: 5,
		maxLength: 30
	},
    lastName: {
		type: String,
		alias: 'Last Name',
        required: true,
		minLength: 3,
		maxLength: 25
	},
	address: {
		type: String,
		alias: 'Address',
        required: true,
	},
	city: {
		type: String,
		alias: 'City',
        required: true,
	},
	state: {
		type: String,
		alias: 'State',
        required: true,
	},
	pin: {
		type: Number,
		alias: 'Pin',
        required: true,
	},
	phone: {
		type: String,
		alias: 'Phone',
        required: true,
		minLength: 10,
		maxLength: 10,
		match: [/^[\d]+$/, "Phone number should contain only numbers."]
	},
    email: {
        type: String,
        alias: 'Email',
        required: true,
		match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
		message: 'Please fill a valid email address'
    }
    // role: {
	// 	type: Array,
	// 	alias: 'Role',
	// 	enum: {
	// 		values: ['Seller', 'Seller'],
	// 		message: 'The value - {VALUE} for user role is not supported.'
	// 	}
	// }
}, {
	collection: 'Sellers'
});

const Seller = model('Seller', SellerSchema);
module.exports = Seller;
