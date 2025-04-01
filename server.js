const express = require('express');
const obtenerUsuarios = require('./src/queries/consult');
const insertarUsuario = require('./src/queries/add');
const eliminarUsuario = require('./src/queries/delete');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/usuarios', (req, res) => {
  obtenerUsuarios()
    .then((usuarios) => {
      res.json(usuarios);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    });
});

app.post('/usuarios', (req, res) => {
  const { user_name, user_email, Name, last_name } = req.body;

  insertarUsuario(user_name, user_email, Name, last_name)
    .then((message) => {
      res.json({ message: 'Usuario insertado correctamente' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al insertar el usuario prueba' });
    });
});

app.delete('/usuarios/:user_id', (req, res) => {
  const { user_id } = req.params;

  eliminarUsuario(user_id)
    .then((message) => {
      res.json({ message: `Usuario con ID ${user_id} eliminado correctamente` });
    })
    .catch((error) => {
      res.status(500).json({ error: `Error al eliminar el usuario  ${user_id}` });
    });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
