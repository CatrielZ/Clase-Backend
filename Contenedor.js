const fs = require('fs');

class Contenedor {
    constructor (rutaArchivo){
        this.nombre = rutaArchivo;
        fs.promises.writeFile(`./${rutaArchivo}`,``)
    }


async save(objeto){
    try {
    let data = await fs.promises.readFile(this.nombre)
    if(data.length ==0){
        let id = {'id':1}
        let newObject=Object.assign(objeto,id)
        const jsonData = [newObject]
        await fs.promises.writeFile(this.nombre ,JSON.stringify(jsonData))
        return id
    }else{    
        const contenido = JSON.parse(data)
        let lastIndex= contenido.length
        let num= lastIndex-1
        let newId= lastIndex+1
        let newObject=Object.assign(objeto,{'id':newId})
        contenido.push(newObject)
        await fs.promises.writeFile(this.nombre, JSON.stringify(contenido))
        return newId
    }

    } catch (error) {
        console.log("ERROR")
        console.log(error)    
    }
   
}
async load(){
   return JSON.parse(await fs.promises.readFile( this.nombre ,'utf-8'))
}
async getById(id){
    try {
        const contenido = await this.load()
        let objeto = contenido.find(el=>el.id==id)
        if(objeto== undefined){return null} 
        return objeto
    } catch (error) {
        console.log(`Error en getById:${error}`)
    }
    
}
async getAll(){
    try {
        const contenido = await this.load()
        return contenido
    } catch (error) {
        console.log(`Error en getAll:${error}`)
    }
}
async deleteById(id){
    try {
        const contenido = await this.load()
        let objeto = contenido.filter(item=>item.id!=id)
        await fs.promises.writeFile(this.nombre,JSON.stringify(objeto))          
        
    } catch (error) {
        console.log(`Error en getById:${error}`)
    }
}

async deleteAll(){
    try {
        await fs.promises.writeFile( this.nombre,"") 
    } catch (error) {
        console.log(`Error en deleteAll:${error}`)
    }
     
}

}

const product =new Contenedor('productos.txt')

async function test(){

let idProduct = await product.save(
    {                                                                                                                                                    
    'title': 'Domiciano Gran Reserva',                                                                                                                                 
    'price': 3400,
    'url': 'https://www.lavinotecadecamilo.com.ar/web/wp-content/uploads/2020/08/domiciano-gr-mb.jpg'                                                                                                                               
  }
)

console.log("Save:", idProduct)
let idProduct2 = await product.save(
    {                                                                                                                                                    
    'title': 'Botellón Restinga 1500ml',                                                                                                                                 
    'price': 3900 ,
    'url': 'https://www.lavinotecadecamilo.com.ar/web/wp-content/uploads/2020/10/IMG-20201021-WA0024.jpg'                                                                                                                               
  }
)
console.log("Save:", idProduct2)  

let idProduct3 = await product.save(
    {                                                                                                                                                    
    'title': 'Marchiori & Barraud Malbec',                                                                                                                                 
    'price': 1450 ,
    'url': 'https://www.lavinotecadecamilo.com.ar/web/wp-content/uploads/2020/08/Marchiori-mb.jpg'                                                                                                                               
  }
)
console.log("Save:", idProduct3)

let productById = await product.getById(2)
console.log("getById:", productById)

let productgetAll= await product.getAll()
console.log("getAll", productgetAll)

/*let productdeleteById = await product.deleteById(1)
console.log(`productdeleteById: ${productdeleteById}`)

let productById2 = await product.getById(1)
console.log("getById:", productById2)

let productdeleteById2 = await product.deleteById(1)
console.log(`productdeleteById: ${productdeleteById2}`) 

let productdeleteAll= await product.deleteAll()
console.log(`productdeleteAll: ${productdeleteAll}`)*/

}

test()