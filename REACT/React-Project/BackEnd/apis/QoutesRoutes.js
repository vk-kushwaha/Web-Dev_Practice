const express = require('express');
const router = express.Router();
const Quotes = require('../models/Quotes');


router.get('/allquotes', async (req, res) => {
    try {
        const allquotes = await Quotes.find();
        res.status(200).json({ allquotes });

    } catch (e) {
        res.status(400).json({ error: 'Internal Server Error' });
    }
});


router.post('/addquotes', async (req, res) => {
    try {
        let { author, text } = req.body;
        let newQuote = await Quotes.create({ author, text });
        // console.log(newQuote, "New Quote");
        res.status(201).json({ msg: "New Quotes Created Successfully" });

    } catch (e) {
        res.status(400).json({ error: 'Something went wrong' });
    }

});

router.get('/quote/:id', async (req, res) => {
    const { id } = req.params;
    Quotes.findById(id)
        .then(quote => {
            res.status(200).json({ quote });
        })
        .catch(err => {
            res.status(400).json({ error: 'Internal Server Error' });
        })
})

module.exports = router;