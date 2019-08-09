'use strict';
// const menu = {
//   width: 400,
//   height: 300,
//   //   title: 'Menu My',
// };
// let count = 0;
// for (let key in menu) {
//   count++;
// }
// console.log('Всего свойств: ' + count);
// ===============================
const countProps = obj => Object.keys(obj).length;

console.log(countProps({})); //0

console.log(
  countProps({
    name: 'Mango',
    age: 2,
  }),
); // 2

console.log(
  countProps({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
  }),
); // 3
