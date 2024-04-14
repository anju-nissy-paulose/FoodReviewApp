const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodieSchema = new Schema({
    foodName: { type: String, required: true },
    foodImg: { type: String, required: true }
}, {
    timestamps: true
});
const Foodie = mongoose.model('Foodie', foodieSchema);

module.exports = Foodie;
