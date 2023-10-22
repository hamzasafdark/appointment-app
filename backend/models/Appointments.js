const mongoose =  require('mongoose');

const appointments = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    contactName:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    }
})

const Appointments = mongoose.model("Appointments",appointments)

module.exports = Appointments;