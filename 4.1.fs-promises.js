const fs = require('node:fs'); // fs es un módulo que nos permite trabajar con el sistema de archivos
// const fs = require('node:fs');   // fs es un módulo que nos permite trabajar con el sistema de archivos
// const { text } = require('node:stream/consumers'); // text es un módulo que nos permite trabajar con el sistema de archivos
// const fs = require('node:fs/promises'); // fs es un módulo que nos permite trabajar con el sistema de archivos   

const { promisify } = promisify(fs.readFile); // promisify es una función que convierte una función de callback en una función que devuelve una promesa

console.log('Leyendo el primer archivo...');
fs.readFilePromise('./archivo.txt', 'utf-8') // readFile es una función que lee un archivo de forma asíncrona
    .then(text => console.log('primer archivo:', text))
    .catch(err => console.error('Error al leer el primer archivo:', err))

    console.log('Hacer algo mientras se lee el archivo...')


console.log('Leyendo el segundo archivo...');
fs.readFileSync('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo archivo:', text)
})
