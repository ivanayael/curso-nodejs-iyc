console.log('Hola mundo');
console.info('Esto es un mensaje informativo');
console.error('Esto es un error');
console.warn('Esto es un aviso');

console.log(typeof 1);
console.log(typeof 'Hola');
console.log(typeof true);
console.log(typeof {});
console.log(typeof []); // object


//CommonJs requiere module.exports
//ES6 requiere export default

const sum = require('./sum');  // Import the sum function
console.log(sum(1, 2)); // 3    // Call the sum function
