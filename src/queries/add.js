const dbPortafolio = require('../config/connection-bd-portafolio');

function addContactMe(name, email, message) {
  return new Promise((resolve, reject) => {
    dbPortafolio.query(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message],
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

module.exports = addContactMe;
