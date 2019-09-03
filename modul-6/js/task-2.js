'use strict';
import { users } from './users.js';

// const activeUsers = users.filter(user => user.eyeColor === 'blue');
// console.log(eyeColor === 'blue');
// =========================================
const getUsersWithEyeColor = (users, color) => {
  return (
    users
      .filter(user => user.eyeColor === color)
      //   .map(user => user.name);
      .map(user => `объект ${user.name}`)
  );
};

console.log(getUsersWithEyeColor(users, 'blue'));
// =============================================

// const getUsersWithEyeColor = (users, color) =>
//   users
//     .filter(user => user.eyeColor === color)
//     .map(user => ({ eyeColor: user.name }));

// console.log(getUsersWithEyeColor(users, 'blue'));
