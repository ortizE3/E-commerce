const express = require('express');
const mongoose = require('mongoose');
const shirtRoutes = require('./Routes/shirts-route');
require('dotenv').config()

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({
        extended: false
    }));
    app.use('/', shirtRoutes);

    app.get('/', (req, res) => {
        res.send('Hello World!')
    });

    app.listen(process.env.PORT, () => {
        console.log('\x1b[36m', `Running on http://localhost:${process.env.PORT}`)
    })
}).catch((error) => {
    console.log(error)
})

