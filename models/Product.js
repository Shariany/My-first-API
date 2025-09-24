const mongoose = require("mongoose");

const ModalSchema = new mongoose.Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model("Product", ProductSchema);