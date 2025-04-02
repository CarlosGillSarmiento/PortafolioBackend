const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const addContactMe = require('./src/queries/add');

app.use(cors());
app.use(express.json());

app.post('/portfolio/contact', (req, res) => {
  const { name, email, message } = req.body;

  addContactMe(name, email, message)
    .then((message) => {
      res.json({
        status: 200,
        message: 'Mensaje enviado correctamente',
      });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al enviar el mensaje' });
    });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
