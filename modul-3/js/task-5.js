'use strict';
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// const getAllPropValues = (arr, prop) => {
//   const newArr = [];

//   for (let item of arr) {
//     newArr.push(item[prop]);
//   }

//   return newArr;
// };
// console.log(getAllPropValues(products, 'name'));
// console.log(getAllPropValues(products, 'quantity'));
// console.log(getAllPropValues(products, 'category'));
// +++++++++++++-Мій варіант

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
  const values = [];
  for (const user of arr) {
    if (prop in user) {
      values.push(user[prop]);
    }
  }
  return values;
};

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'category'));

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// function getAllPropValues(arr, prop) {
//   return arr.reduce(function(result, item) {
//     if (
//       result.indexOf(item[prop]) == -1 && // if need unique values
//       typeof item[prop] != 'undefined'
//     )
//       // if don't want undefined's
//       result.push(item[prop]);
//     return result;
//   }, []);
// }

// console.log(getAllPropValues(products, 'name'));
// console.log(getAllPropValues(products, 'quantity'));
// console.log(getAllPropValues(products, 'category'));

// const users = [
//   {
//     name: 'Poly',
//     age: 7,
//     mood: 'happy',
//   },
//   {
//     name: 'Mango',
//     age: 4,
//     mood: 'blissful',
//   },
//   {
//     name: 'Ajax',
//     age: 3,
//     mood: 'tired',
//   },
// ];

// function getAllPropValues(arr, prop) {
//   return arr.map(el => el[prop]);
// }

// // Вызовы функции для проверки
// console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']

// console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']

// console.log(getAllPropValues(users, 'active')); // []
