const express = require('express');
const router = express.Router()
const hogarController= require('../controllers/hogar.controller')
//creacion de rutas
router.get('/productosHogar',hogarController.get);
module.exports = router