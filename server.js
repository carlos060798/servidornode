const express = require('express');
const http = require('http');
const chalk = require('chalk');

const app = express();
const server = http.createServer(app);

const host = 'localhost';
const port = 8000; // Puedes cambiar el puerto según tus preferencias

app.get('/', (req, res) => {
  const response = {
    nombre: 'Tu Nombre',
    mensaje: 'Hola desde tu servidor Node.js con Express.',
  };
  res.json(response);
});

server.listen(port, host, () => {
  console.log(chalk.green(`El servidor está escuchando en http://${host}:${port}`));
});
