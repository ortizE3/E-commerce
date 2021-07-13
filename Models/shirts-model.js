const mongoose = require("mongoose")

const schema = mongoose.Schema({
    src: String,
    alt: String,
});

module.exports = mongoose.model("Shirt", schema)