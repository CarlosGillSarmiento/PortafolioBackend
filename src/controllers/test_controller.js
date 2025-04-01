const  obtenerUsuarios  = require('../queries/consult');
const agregarUsuarios = require('../queries/add');
const eliminarUsuarios = require('../queries/delete');

// obtenerUsuarios()
//   .then((usuarios) => {
//     console.log('Usuarios obtenidos:', usuarios);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// user_name = 'prueba borrar';
// user_email = 'agregar@prueba.com'
// Name = 'Agregar';
// last_name = 'Apellido Agregar';

// agregarUsuarios(user_name, user_email, Name, last_name)
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//   eliminarUsuarios(8)
//   .then((resultado) => {
//     console.log(resultado);
//   })