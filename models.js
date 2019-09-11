// MODELS
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/1955_API', {useNewUrlParser: true});

const PersonSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Must provide a name']},
}, {timestamps: true})

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;