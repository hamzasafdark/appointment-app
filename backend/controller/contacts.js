const Contacts = require('../models/Contacts');

const createContacts = async(req,res) => {
    try {
        const {name,phoneNumber,email} = req.body;
        const newContact = new Contacts({name,phoneNumber,email});
        await newContact.save();
        res.status(200).send(newContact)
    } catch (error) {
        res.status(400).send({error: error.message});   
    }
}

const getAllContacts = async (req,res) => {
    try {
        const allContacts = await Contacts.find();
        res.status(201).json(allContacts);
    } catch (error) {
        res.status(400).send({error: error.message});  
    }
}

const deletebyId = async(req,res)=>{
    try {
    let dataAgainstId = await Contacts.findByIdAndDelete(req.params.id)
    if(!dataAgainstId)
    {
        return res.status(400).json({message: "Nothing is found against this ID"});

    }
    res.json({message: "Deletion succesful"});
    } catch (error) {
        res.status(500).json({error:error.message})       
    }
}

const updateById = async(req,res) => {
    try {
        const {name,phoneNumber,email} = req.body;
        let dataAgainstId = await Contacts.findByIdAndUpdate(req.params.id,{name,phoneNumber,email},{new:true});
        if(!dataAgainstId)
        {
            res.status(400).json({error: "Nothing against this id to be updated"})
        }   
        res.json(dataAgainstId);
    } 
    catch (error) {
        res.status(500).json({error: error.message})        
    }
}

module.exports = {
    createContacts,
    getAllContacts,
    deletebyId,
    updateById
}