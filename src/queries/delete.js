const db = require('../config/connection-bd');

function eliminarUsuario(user_id) {
  return new Promise((resolve, reject) => {
    db.query(
      'DELETE FROM USUARIOS WHERE user_id = ?', 
      [user_id],
      (err, results) => {
        if (err) {
          reject('Error al eliminar el registro:', err);
        } else {
          resolve(`Registro con ID ${user_id} eliminado correctamente`);
        }
      }
    );
  });
}

module.exports = eliminarUsuario;