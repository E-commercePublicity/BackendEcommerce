const express = require('express');
const router = express.Router()
const vestuarioController= require('../controllers/vestuario.controller')
//creacion de rutas 
router.get('/productosVestuario',vestuarioController.get);

module.exports = router