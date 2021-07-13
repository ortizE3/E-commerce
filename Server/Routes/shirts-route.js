const express = require("express")
const Shirt = require("../Models/shirts-model")
const router = express.Router();
const shirtsController = require('../Controllers/shirts-cont')

router.get("/shirts", async (req, res) => {
    const shirts = await Shirt.find();
    res.send(shirts);
});

router.post("/shirts", async (req, res) => {

    shirtsController.postShirts(req.body.numberOfImages).then((data) => {

        Shirt.insertMany(data).then(() => {
            res.send(`Inserted ${data.length} images`);
        }).catch((error) => {
            console.log(error);
        });

    }).catch((error) => {
        console.log(error)
    });
})

router.delete("/shirts", async (req, res) => {
    await Shirt.deleteMany({}).then(() => {
        res.send('Deleted All');
    });
});

module.exports = router