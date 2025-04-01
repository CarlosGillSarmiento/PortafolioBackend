const db = require('../config/connection-bd');

function agregarUsuarios(user_name, user_email, Name, last_name) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO USUARIOS (user_name, user_email, create_at, Name, last_name) VALUES (?, ?, CURRENT_TIMESTAMP, ?, ?)',
      [user_name, user_email, Name, last_name],
      (err, results) => {
        if (err) {
          reject('Error al insertar el registro:', err);
        } else {
          resolve('Registro insertado correctamente:', results);
        }
      }
    );
  });
}

module.exports = agregarUsuarios;
