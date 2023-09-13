import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_divide = calc.divide(2, 3);
const result_multiply = calc.multiply(2, 3);

console.log(`result_add = ${result_add}`);
console.log(`result_divide = ${result_divide}`);
console.log(`result_multiply = ${result_multiply}`);
console.log('done.');

