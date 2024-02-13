const express = require('express');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const models = require('./models/Quotes');
const cors = require('cors');
const quoteRoutes = require('./apis/QoutesRoutes');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/quotes')
    .then(() => console.log(' DB Connected!'))
    .catch(() => console.log('Error connecting to MongoDB', err));

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(quoteRoutes);


// seedDB();
PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is connected at  ${PORT}`);
});