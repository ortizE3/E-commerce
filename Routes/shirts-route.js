const express = require("express")
const Shirt = require("../Models/shirts-model")
const router = express.Router();
const shirtsController = require('../Controllers/shirts-cont')

router.get("/shirts", async (req, res) => {
    const shirts = await Shirt.find()
    res.send(shirts)
});

router.post("/shirts", async (req, res) => {
    let shirts = shirtsController.postShirts(3);
    Shirt.insertMany(shirts)
    res.send(shirts);
})

module.exports = router