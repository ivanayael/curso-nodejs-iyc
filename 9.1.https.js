const http = require('node:http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo\n');
})

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000/');
})
// Para ejecutar el servidor, usa el siguiente comando en la terminal:
// node 9.http.js
// Luego abre tu navegador y visita http://localhost:3000/
// Deberías ver el mensaje "Hola Mundo" en la página.
// Puedes detener el servidor presionando Ctrl + C en la terminal.
// El servidor escuchará en el puerto 3000 y responderá con "Hola Mundo" a cualquier solicitud HTTP.
// Puedes modificar el mensaje o el puerto según tus necesidades.
// Este es un ejemplo básico de un servidor HTTP en Node.js.
// Puedes expandirlo para manejar diferentes rutas, métodos HTTP, etc.
// Por ejemplo, puedes agregar lógica para manejar diferentes rutas y métodos HTTP.
// Aquí hay un ejemplo simple de cómo manejar diferentes rutas:
// const http = require('node:http')
// const server = http.createServer((req, res) => {
//   if (req.url === '/') { // // Ruta principal
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hola Mundo\n');
//   } else if (req.url === '/about') { // Ruta /about
//     res.writeHead(200, { 'Content-Type': 'text/plain' });    
//     res.end('Acerca de\n');
//   } else { // Ruta no encontrada
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 No encontrado\n');
//   }
// })
