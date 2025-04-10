const mysql = require('mysql2');

// Crear la conexión a la base de datos
const dbPortafolio = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ContactMe'
});

dbPortafolio.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    process.exit(1);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

module.exports = dbPortafolio;
