'use strict';

// let input;
// const numbers = [];
// let total = 0;
// input = prompt('Введите число');

// for (let i = 0; i < input; i += 1) {
//   if (input !== null) {
//   }
//   if (isNaN(input) || input === '') {
//     console.log = alert('Было введено не число, попробуйте еще раз');
//   } else {
//     numbers = input;
//     // input = Number(input);

//     total += numbers;
//   }
//   input = prompt('Введите число');
// }

// console.log = alert(`Общая сумма чисел равна ${total}`);

function sumInput() {
  let numbers = [];

  while (true) {
    let input = prompt('Введите число');

    if (input === '' || input === null) break;

    numbers.push(+input);
  }

  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return `Общая сумма чисел равна ${total}`;
}

alert(sumInput());
