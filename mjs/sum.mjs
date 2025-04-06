import { sum, sub, mult, div } from './sum.mjs'

export function sum(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function mult(a, b) {
    return a * b;
}

export function div(a, b) { 
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}