const { Router } = require('express')
const router = Router()
const { getProductos, postProductos, mostrarForm } = require('../controllers/productoController')

router.get('/productos', getProductos)
router.get('/crear', mostrarForm)
router.post('/productos', postProductos)

module.exports= router
