const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    foodAppName: { type: String, required: true },
    shopName: { type: String, required: true },
    price: { type: Number, required: true }
}, {
    timestamps: true
});
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;