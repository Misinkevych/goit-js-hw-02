'use strict';
import { users } from './users.js';

// const names = users.map(user => user.name);

// console.log(names);
const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));

// const getUserNames = users => {
//   // твой код
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
