// 1.1. Desarrollar el Proyecto
// A continuación, creará su propia base de datos de red social con las siguientes colecciones:
// Users
// Posts
// Comments

          db.createCollection(‘Users’);
          db.createCollection(‘Posts’);


// 1.2.1 INSERTAR DATOS


// Insertar al menos 15 publicaciones nuevas con almenos 2 comentarios por publicación:
// Title
// Body
// Username
// Comments
//   Username
//   Body


            db.Posts.insertMany([

            { title: "adios", body: "adios mundo", username: "suxxx",comments: [{username: "manola",body: "me encanta tu  adios mundo"}]},

            { title: "ta gueno", body: "ta muuuu gueno", username: "xavi",comments: [{username: "raton",body: "muuy weno"}]},

            { title: "colonia", body: "esta colonia huele mal", username: "maria",comments: [{username: "juana",body: "no, huele bien"}]},

            { title: "cena", body: "buenisimo todo", username: "juan",comments: [{username: "paco",body: "malisimo todo"}]},

            { title: "movil", body: "este movil no suena", username: "supe",comments: [{username: "manola",body: "si suena si"}]},

            { title: "patines", body: "rapidisimos estos patines", username: "supe",comments: [{username: "juana",body: "si son rapidos si"}]},

            { title: "soso", body: "ta soso", username: "yol",comments: [{username: "nuria",body: "no ta soso"}]},

            { title: "camiseta", body: "es grande", username: "suxxx",comments: [{username: "paca",body: "no es grande"}]},

            { title: "asdada", body: " qweqrqweeqwe", username: "supe",comments: [{username: "manolo",body: "me encanta tu  qweqrqweeqwe"}]},

            { title: "dadadsadasda", body: " qweqrqweeqwe", username: "supe",comments: [{username: "manolo",body: "me encanta tu  qweqrqweeqwe"}]},

            { title: "asdasd", body: " qweqrqweeqwe", username: "supe",comments: [{username: "manolo",body: "me encanta tu  qweqrqweeqwe"}]},

            { title: "qwerty", body: " qweqrqweeqwe", username: "supe",comments: [{username: "manolo",body: "me encanta tu  qweqrqweeqwe"}]},

            { title: "cena", body: " qweqrqweeqwe", username: "supe",comments: [{username: "manolo",body: "me encanta tu  qweqrqweeqwe"}]},

            { title: "me canse de poner datos", body: " qweqrqweeqwe", username: "supe",comments: [{username: "manolo",body: "me encanta tu  qweqrqweeqwe"}]},

            ])




// Insertar al menos 10 nuevos usuarios:
// Username
// Email
// Age

            db.Users.insertMany([

            { username: "user1", age: 55, email: "emailrandom1@random.com"},

            { username: "user2", age: 37, email: "emailrandom2@random.com"},

            { username: "user3", age: 58, email: "emailrandom3@random.com"},

            { username: "user4", age: 31, email: "emailrandom4@random.com"},

            { username: "user5", age: 54, email: "emailrandom5@random.com"},

            { username: "user6", age: 44, email: "emailrandom6@random.com"},

            { username: "user7", age: 99, email: "emailrandom7@random.com"},

            { username: "user8", age: 25, email: "emailrandom8@random.com"},

            { username: "user9", age: 15, email: "emailrandom9@random.com"},

            { username: "user10", age: 49, email: "emailrandom10@random.com"}

            ])


// 1.2.2 ACTUALIZAR DATOS
 
// Actualizar publicaciones:
// -Actualiza todos los campos de una publicación

            db.Posts.updateOne({ title: 'cena' },
            { $set:{ title: "ultima cena", body: "buenisimo todo pero judas no pago", username: "jesucristo",comments: [{username: "juan",body: "el cabron se fue de sinpa"}]}})

// -Cambiar el body de una publicación.

            db.Posts.updateOne({ title: 'movil' },
            {
              $set: {
                body: "va como la seda",
              }
            })


// Actualizar comentarios:


// Cambiar el body de un comentario.

          db.Posts.updateOne({ title: 'adios' }, {$set: {comments: {username: "paco", body:"ciao bella" },}})

// Actualizar usuarios:
// Actualiza todos los campos de un usuario

          db.Users.updateOne({ username: "user10"},{$set: { username: "userNuevo", age: 29, email: "nuevo@random.com"}})

// Cambiar el email de dos usuarios es decir hacer la query dos veces.

          db.Users.updateOne({username: "user1"},{$set: {email: 'meloinvento@meloinvento.com'}})
          db.Users.updateOne({username: "user2"},{$set: {email: 'meloinvento2@meloinvento.com'}})
          

// Aumenta en 5 años la edad de un usuario

          db.Users.updateOne({ username: 'user1' },
          {
            $inc: {
              age: 5
            }
          })

// 1.2.3 OBTENER DATOS

// Seleccionar todas las publicaciones

          db.Posts.findAll();

// Selecciona las publicaciones que coincidan con el username indicado

          db.Posts.find({username: "supe"})

// Seleccione todos los usuarios con una edad mayor a 20

          db.Users.find({age: {$gt:20}})

// Seleccione todos los usuarios con una edad inferior a 23

          db.Users.find({age: {$lt:23}})

// Seleccione todos los usuarios que tengan una edad entre 25 y 30 años

         db.Users.find({age:{$gte: 25 ,$lte: 30}})

// Muestra los usuarios de edad menor a mayor y viceversa

         db.Users.find().sort({age: 1})
         db.Users.find().sort({age: -1})

// Seleccione el número total de usuarios

         db.Users.find().count()

// Seleccione todas las publicaciones de la siguiente manera: Título de la publicación: "título de las publicaciones"

          db.Posts.find().forEach((post) => {
            print("titulo de la publicacion: " + post.title)
          })

// Selecciona solo 2 usuarios

          db.Users.find().limit(2)


// Busca por title 2 publicaciones

          db.Posts.find({title : "camiseta"}).limit(2)

// Elimina a todos los usuarios con una edad mayor a 30

          db.Users.deleteMany({ age: {$gt:30}})



// Seleccione el número total de publicaciones que tienen más de un comentario

          db.Posts.find({comments: {$size: 2}})

// Seleccione la última publicación creada

          db.Posts.find().sort({_id: -1}).limit(1)

// Selecciona 5 publicaciones y que sean las últimas creadas

          db.Posts.find().sort({_id: -1}).limit(5)
// Elimina todas las publicaciones que tengan más de un comentario

          db.Posts.deleteMany({comments:{$size: 2}})

