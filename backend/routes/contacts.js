const express = require("express");
const router = express.Router();
const contactsController = require('../controller/contacts');

router.post('/createcontact',contactsController.createContacts);
router.get('/getallcontacts',contactsController.getAllContacts);
router.put('/updatebyID/:id',contactsController.updateById);
router.delete('/deletionByID/:id',contactsController.deletebyId);
module.exports = router;