// .js -> CommonJs
// .mjs -> ES6
// .cjs -> CommonJs


import { sum , substract, multiply, divide } from './sum.mjs';  // Import the sum function
console.log(sum(1, 2)); // 3    // Call the sum function
console.log(substract(1, 2)); // -1    // Call the substract function
console.log(multiply(1, 2)); // 2    // Call the multiply function      
console.log(divide(1, 2)); // 0.5    // Call the divide function
console.log(divide(1, 0)); // Error: No se puede dividir por cero    // Call the divide function    // Call the divide function
