import { Router } from 'express';
const router = Router()
import { getProductos, postProductos, mostrarForm  } from '../controllers/productosController';

router.get('/productos', getProductos)
router.get('/crear', mostrarForm)
router.post('/productos', postProductos)

export default router
