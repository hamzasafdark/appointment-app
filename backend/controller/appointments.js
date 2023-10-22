const Appointments = require('../models/Appointments')

const createAppointments = async(req,res) =>{
try{    const {title,contactName,Date,Time} = req.body;
    const newAppointment = new Appointments({title,contactName,Date,Time});
    await newAppointment.save();
    res.status(200).send(newAppointment);
}
catch(error)
{
    res.status(400).send(error)
}
}
const getAllAppointments =async (req,res)=>{
    try{
        const allAppointments = await Appointments.find({});
        res.status(201).json({allAppointments});
    }
    catch(error)
    {
        res.status(404).send(error)
    }
}

// const deletebyId = async(req,res) => {
//     try 
//     {
//         const dataAgainstId = await Appointments.findByIdAndDelete(req.params.id);
//         if(!dataAgainstId)
//         {
//             res.status(400).json({error: "Nothing against this ID to delete"});
//         } 
//         res.json({message: "Deletion Successful"})       
//     } 

//     catch (error) {
//         res.status(500).json({error: error.message})  
//     }
// }

const deleteById=async(req , res)=> {
    try{
    let dataAgainstId = await Appointments.findByIdAndDelete(req.params.id)
    if(!dataAgainstId){
        return res.status(404).json({message:"DATA NOT FOUND"})
    }
    res.json({message:"delete successful"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const updateById = async(req,res) => {
    try 
    {
        const {title,contactName,Date,Time} = req.body;
        const dataAgainstId = await Appointments.findByIdAndUpdate(req.params.id,{title,contactName,Date,Time},{new:true});
        if(!dataAgainstId)
        {
            res.status(400).json({error: "Nothing against this ID was found"});
        }
        res.json(dataAgainstId);  
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    createAppointments,
    getAllAppointments,
    deleteById,
    updateById
}