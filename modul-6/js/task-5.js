'use strict';
import { users } from './users.js';

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
//   // .map(user => user.name);
// };
// const getUserWithEmail = (users, email) => {
//   return users.find(user => {
//     user.email === email;
//   });
//   // .reduce((acc, user) => {
//   //   return user;
//   // });
// };
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
