//le fichier de creation du schema de la collection contact et exportation du model
const mongoose = require('mongoose');
const schema = mongoose.Schema;
// les composants de la collection: le document se compose de ces champs avec leurs types
const contactSchema = new schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone: Number,
    
});
// exportation
module.exports = Contact = mongoose.model('contact', contactSchema);