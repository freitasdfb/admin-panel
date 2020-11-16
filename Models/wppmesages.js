const mongoose = require('mongoose');
const wppMessageSchema = new mongoose.Schema({
    mensagem: {
        type: String,
        required: true,
    },
    anexo: {
        type: String,
        required: false,
    },
    baseDeContatos: {
        type: String,
        required: false,
    },
    
})
module.exports = mongoose.model('WppMessage', wppMessageSchema)