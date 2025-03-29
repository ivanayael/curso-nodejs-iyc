const fs = require('node:fs');
const { text } = require('node:stream/consumers');

console.log('Leyendo el primer archivo...');
fs.readFileSync('./archivo.txt', 'utf-8', (err, text) => {
    console.log('primer archivo:', text)
})

console.log('Hacer algo mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...');

fs.readFileSync('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo archivo:', text)
})



