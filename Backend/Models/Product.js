const {Schema, model} = require('../connection')
const userSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    description: String
});
module.exports = model('product', userSchema)