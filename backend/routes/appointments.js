const express = require ('express');
const router = express.Router();

const appointmentsController = require ('../controller/appointments')

router.post('/createAppointment',appointmentsController.createAppointments);
router.get('/getallappointments',appointmentsController.getAllAppointments);
router.put('/updatebyID/:id',appointmentsController.updateById);
router.delete('/deletionByID/:id',appointmentsController.deleteById);
module.exports = router;