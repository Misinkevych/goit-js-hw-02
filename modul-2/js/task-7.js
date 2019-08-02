'use strict';

let input;
const numbers = [];
let total = 0;
input = prompt('Введите число');

for (let i = 0; i < input; i += 1) {
  if (input !== null)
    if (isNaN(input) || input === '') {
      console.log = alert('Было введено не число, попробуйте еще раз');
    } else {
      const numbers = Number(input);
      total += numbers;
    }
  input = prompt('Введите число');
}

console.log = alert(`Общая сумма чисел равна ${total}`);
