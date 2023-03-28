const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('./static/index.html', {
    root: __dirname
  });
});

app.get('/catalogo', (req, res) => {
  res.sendFile('./static/catalogo.html', {
    root: __dirname
  });
});

app.get('/nosotros', (req, res) => {
  res.sendFile('./static/nosotros.html', {
    root: __dirname
  });
});

app.use((req, res) => {
  res.status(404).send('No se encontro tu pagina......!!!')
});

app.listen(port);
console.log(`Servidor iniciado en: http://localhost:${port}`);