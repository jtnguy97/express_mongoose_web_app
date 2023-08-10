const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        //only allow a specific number of them
        enum: ["fruit", "vegetable", "dairy", "fungi"]
    }
})


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
