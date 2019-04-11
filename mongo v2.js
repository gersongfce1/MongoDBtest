//Crear base de datos en la terminal desde mongo

use customers

//Creamos un usuario para la base de datos

db.createUser({
    user:'Jheyson',
    pwd:'asd123',
    roles:['readWrite','dbAdmin']
})
//ahora creampos una coleecion de datos , para agruparlos en los customers

db.users.insert({
    nombre:'gerson',
    apellido:'gutierrez'
})
//visualizamos si se agrego el dato
db.users.find().pretty()
//agregar multiples datos atravez de un arreglo(array)
db.users.insert(
[{ nombre: 'luis',apellido:'saez'},
 { nombre: 'jheyson',apellido:'portocarrero'},
 { nombre: 'mario',apellido:'hernandez'},
 { nombre: 'elena',apellido:'cerron'},
 { nombre: 'vannia',apellido:'sosa'},
 { nombre: 'jose',apellido:'valladares'},
 { nombre: 'carlos',apellido:'ortiz'},
 { nombre: 'david',apellido:'trello'}
])

//buscar un usuario atraves de una consulta

db.users.find({nombre:'luis'})

//actualizar datos

db.users.update({
    nombre:'mario'
},
{
    nombre:'mario',
    apellido:'fernandez',
    edad:'35',
    sexo:'masculino',
    cel:'985252547'
}


)
//actualizar datos atraves de set

db.users.update({
    nombre:'vannia'
},
{
    $set:{direccion:'lambayeque'}
}
)

//actualizar datos , atraves de un incremento
db.users.update({
    nombre:'mario'
},
{
    $inc:{edad:5}
})

//actualizar datos , atraves de un rename

db.users.update({
    nombre:'carlos'
},
{$rename:{'nombre':'name'}})
//remover datos
db.user.remove({
    nombre:'david'
})



=================MONGO PRACTICA 2============================
=============================================================
=============================================================
//buscar un dato atraves de un "OR"
db.users.find(
    {$or:[{nombre:'luis'},{nombre: 'mario'}}]
)

//insertar arreglos a traves de objetos

db.users.insert(
    [   
        {name:'gilberto', age:20},
        {name:'maria', age:43},
        {name:'vanessa',age:18}
    ]
)
//buscar datos mayores de 18 años

db.users.find({age:{$gt:18}})

//buscar datos menores a 43

db.users.find({age:{$lt:43}})

//buscar datos entre las de edades de 18 y 43 años
db.users.find({age:{$gt:18,$lt:43}})

//buscar datos anidados (objetos dentro de otros objetos)

db.users.insert
(
  [
    {
        name:"freddy",
        address:{city:"london"},
        card:{banco:interbank"}
    },
    {
        name:'david',
        address:{city:'usa'},
        card:{banco:'bcp'}
    },
    {
        name:'patrick',
        address:{city:'argentina'},
        card:{banco:'interbank'}
    },
    {
        name:'karl',
        address:{city:'colombia'},
        card:{banco:'interbank'}
    },
    {
        name:'jose',
        address:{city:'venezuela'},
        card:{banco:'bcp'}
    }

  ]
)

//BUSCAR DATOS ATRAVES DE CARACTERES(coincidir)

db.users.find({name:{$regex:'ddy'}})

//ORDENAR ATRAVES DE SORT89

db.users.find().sort({name:1})

