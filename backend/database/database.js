const mongoose = require('mongoose');
const URI = 'mongodb://localhost/fundaciones';

//CONST URI
//process.env.MONGODB_URI

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true
}) 
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;