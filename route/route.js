const express = require('express')
const router = express.Router();


const UserController = require('../controler/controller')


router.post('/employee', UserController.create);


router.get('/getAll', UserController.getAll);

module.exports = router