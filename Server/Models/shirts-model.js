const mongoose = require("mongoose")

const shirtSchema = mongoose.Schema({
    src: String,
    alt: String,
});

module.exports = mongoose.model("Shirt", shirtSchema);