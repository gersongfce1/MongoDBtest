//Crear base de datos en la terminal desde mongo

use customers;

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
 { nombre: 'jheyson',apelldio:'portocarrero'},
 { nombre: 'mario',apelldio:'hernandez'},
 { nombre: 'elena',apelldio:'cerron'},
 { nombre: 'vannia',apelldio:'sosa'},
 { nombre: 'jose',apelldio:'valladares'},
 { nombre: 'carlos',apelldio:'ortiz'},
 { nombre: 'david',apelldio:'trello'}
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