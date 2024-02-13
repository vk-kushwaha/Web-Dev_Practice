const mongoose = require('mongoose');
const Quote = require('./models/Quotes');

let dummyquotes = [
    {
        author: " Dalai Lama",
        text: "The purpose of our lives is to be happy."

    }, {
        author: "John Lennon",
        text: "Life is what happens when you're busy making other plans."
    }, {
        author: "Stephen King",
        text: "Get busy living or get busy dying."
    }, {
        author: "Mae West",
        text: "You only live once, but if you do it right, once is enough."
    }, {
        author: "Walt Disney",
        text: "The way to get started is to quit talking and begin doing."
    }, {
        author: "Mahatma Gandhi",
        text: "You must be the change you wish to see in the world."
    }, {
        author: "Oscar Wilde",
        text: "Be yourself; everyone else is already taken."
    }, {
        author: "Mother Teresa",
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
    }, {
        author: "Abraham Lincoln",
        text: "In the end, it's not the years in your life that count. It's the life in your years."
    }];


async function seedDB() {
    await Quote.insertMany(dummyquotes)
    console.log("DC Seeded Successfuly");

}


module.exports = seedDB