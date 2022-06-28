import Contenedor, {getAll, newProduct} from "../Contenedor"
const contenedor= new Contenedor()

const getProductos = (req, res) => {
    const productos= contenedor.getAll()
    res.render('productos.pug', { productos:productos})
}

const postProductos = (req, res) => {
    const {title, price, thumbnail} = req.body 
    contenedor.newProduct(title, price, thumbnail)
    res.redirect('/productos')
}

const mostrarForm =(req,res)=>{
    res.render('index.pug')
}


export default {getProductos, postProductos, mostrarForm}