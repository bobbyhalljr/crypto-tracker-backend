const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys')

mongoose.Promise = glabal.Promise

url = mongoURI

mongoose.connect(url, { useNewUrlParser: true })
mongoose.connect.once('open', () => console.log(`Connected to mongodb databse at: ${ url }`))