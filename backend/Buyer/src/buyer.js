const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { buyerRouter } = require('./buyer-route');

const apiPrefix = '/e-auction/api/v1';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect(process.env.MONGO_DB_URI).then(() => {
	console.log('DB connected');
})

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

app.use(`${apiPrefix}/buyer`, buyerRouter);