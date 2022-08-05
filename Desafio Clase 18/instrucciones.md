# Comandos MongoDB
## _Crear Base de Datos_
````
use ecommerce
````
 ## Crear Colecciones
````
db.createCollection("mensajes");
db.createCollection("productos");
````
## Puntos 1 y 2
Insertar Documentos

_Mensajes_
````
db.mensajes.insertOne({email:"anonimo1@gmail.com",createdAt:ISODate(),message:"Hola"});
db.mensajes.insertOne({email:"anonimo2@gmail.com",createdAt:ISODate(),message:"Hola mi coderamigo"});
db.mensajes.insertOne({email:"anonimo1@gmail.com",createdAt:ISODate(),message:"Como estas te gusta el curso?"});
db.mensajes.insertOne({email:"anonimo2@gmail.com",createdAt:ISODate(),message:"Esta muy bueno."});
db.mensajes.insertOne({email:"anonimo1@gmail.com",createdAt:ISODate(),message:"Me alegro mucho"});
db.mensajes.insertOne({email:"anonimo2@gmail.com",createdAt:ISODate(),message:"Quiero que saquen un curso de microservicios"});
db.mensajes.insertOne({email:"anonimo1@gmail.com",createdAt:ISODate(),message:"Esto estaria genial"});
db.mensajes.insertOne({email:"anonimo2@gmail.com",createdAt:ISODate(),message:"Muy genial"});
db.mensajes.insertOne({email:"anonimo1@gmail.com",createdAt:ISODate(),message:"Super genial"});
db.mensajes.insertOne({email:"anonimo2@gmail.com",createdAt:ISODate(),message:"Adios"});
````
_Productos_
````
db.productos.insertOne({title:"Arroz",price:120,thumbnail:"url"});
db.productos.insertOne({title:"Papa",price:580,thumbnail:"url"});
db.productos.insertOne({title:"Camote",price:900,thumbnail:"url"});
db.productos.insertOne({title:"Carne",price:1280,thumbnail:"url"});
db.productos.insertOne({title:"Pescado",price:1700,thumbnail:"url"});
db.productos.insertOne({title:"Zanahoria",price:2300,thumbnail:"url"});
db.productos.insertOne({title:"Cebolla",price:2860,thumbnail:"url"});
db.productos.insertOne({title:"Azucar",price:3350,thumbnail:"url"});
db.productos.insertOne({title:"Tomate",price:4320,thumbnail:"url"});
db.productos.insertOne({title:"Chocolate",price:4990,thumbnail:"url"});
````
## Punto 3
Listar Documentos
````
db.productos.find();
db.mensajes.find();
````
## Punto 4
Mostrar cantidad de Documentos
````
db.productos.countDocuments();
db.mensajes.countDocuments();
````
## Punto5
Agregar un producto
````
db.productos.insertOne({title:"Calabaza",price:5000,thumbnail:"url"});
````
Listar productos menores a 1000
````
db.productos.find({price:{$lt:1000}});
````
Listar productos entre 1000 a 3000
````
db.productos.find({$and:[{price:{$gte:1000}},{price:{$lte:3000}}]});
````
Listar productos mayores a 3000
````
db.productos.find({price:{$gt:3000}});
````
Listar tercer producto mas barato
````
db.productos.find({},{_id:0,title:1}).sort({price:1}).limit(1).skip(2);
````
Agregar campo Stock a los productos
````
db.productos.updateMany({},{$set:{stock:100}});
````
Cambia Stock a 0 de productos menores a 4000
````
db.productos.updateMany({price:{$gt:4000}},{$set:{stock:0}});
````
Borrar productos con precio menor a 1000
````
db.productos.deleteMany({price:{$lt:1000}});
````

## Punto 6
Crear usuario
````
db.createUser({
  user:"pepe",
  pwd:"asd456",
  roles:[
    {
        role:"read",db:"eccommerce"
    }
  ]
});
````