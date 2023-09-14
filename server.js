const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const port = 8000;

const servidor = http.createServer((req, res) => {
  const respuesta = {
    nombre: 'Tu Nombre',
    mensaje: '¡Hola desde el servidor Node.js!'
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(respuesta));
});

servidor.listen(port, host, () => {
  console.log(chalk.green(`Servidor escuchando en http://${host}:${port}`));
});