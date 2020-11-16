const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
})
module.exports = mongoose.model('Cliente', customerSchema)