'use strict';

const logItems = function(array) {
  console.log(array);
  let index;
  for (let i = 0; i < array.length; i += 1) {
    index = i + 1;
    console.log(`${index} - ${array[i]}`);
  }
};
const names = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
logItems(names);
logItems(numbers);
