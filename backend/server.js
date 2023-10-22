const express = require('express');
const app = express();
let cors = require ('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('./config/connection');


const contactsRouter = require('./routes/contacts');
 const appointmentRouter = require('./routes/appointments');
// const quantityRouter = require('./routes/quantity')


const PORT = process.env.PORT || 8000;
app.use(cors())
dotenv.config();
app.use(bodyParser.json());
app.use(express.static('Public'));



app.use('/contact', contactsRouter);
app.use('/appointments',appointmentRouter);
// app.use('/quantity',quantityRouter);


app.listen(PORT,'localhost',(req,res)=>{console.log(`Server started at ${PORT}`)})