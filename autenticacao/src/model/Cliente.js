const mongoose = require('mongoose');

const esquema = new mongoose.Schema({
    nome :{
        type : String,
        require : true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Cliente = mongoose.model('Cliente', esquema);
module.exports = Cliente;

