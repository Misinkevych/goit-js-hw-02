'use strict';
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
  for (let item of arr) {
    if (item.name === prop) {
      return item.price * item.quantity;
    }
  }
};

console.log(getAllPropValues(products, 'Радар')); //5200
console.log(getAllPropValues(products, 'Сканер')); //8100
console.log(getAllPropValues(products, 'Дроид')); //2800
console.log(getAllPropValues(products, 'Захват')); //2400
