const { Schema, model } = require('mongoose');

const smoothiesSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
    },
    ingredients: {
        type: String,
        required: true,
        trim: true,
    },
    recipes: {
        type: String,
        required: true,
        trim: true,
    },
});

const Smoothies = model('Smoothies', smoothiesSchema);

module.exports = Smoothies;
