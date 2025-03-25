function sum(a, b) {
  return a + b;
}

module.exports = sum;  // Export the sum function

module.exports = {
    sum // Export the sum function
}
// Path: sum.test.js
const sum = require('./sum');   // Import the sum function  