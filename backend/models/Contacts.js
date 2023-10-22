const mongoose = require('mongoose');

const contacts = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    phoneNumber:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
}
)

const Contacts = mongoose.model("Contacts",contacts)

module.exports = Contacts;