const fs = require('node:fs');   // fs es un módulo que nos permite trabajar con el sistema de archivos 

const stats = fs.statSync('./archivo.txt'); // stats es un objeto que contiene información sobre el archivo

console.log(
stats.isFile(), // si es un fichero true
stats.isDirectory(), // si es un directorio false
stats.isSymbolicLink(), // si es un enlace simbolico false
stats.size, // Tamaño del archivo 1024
) // 2021-07-07T21:00:00.000Z