const express = require('express');
const router = express.Router()
const tecnologiaController= require('../controllers/tecnologia.controller')
//creacion de rutas
router.get('/productosTecnologia',tecnologiaController.get);

module.exports = router