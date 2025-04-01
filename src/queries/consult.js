const db = require('../config/connection-bd');

function obtenerUsuarios() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM USUARIOS', (err, results) => {
      if (err) {
        reject('Error al realizar la consulta: ', err);
      } else {
        db.query('SELECT COUNT(*) AS total FROM USUARIOS', (err, countResult) => {
          if (err) {
            reject('Error al obtener el total de registros: ', err);
          } else {
            resolve({
              status: 200,
              totalRecords: countResult[0].total,
              usuarios: results,
            });
          }
        });
      }
    });
  });
}

module.exports = obtenerUsuarios;
