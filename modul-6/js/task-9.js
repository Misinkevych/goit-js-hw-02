'use strict';
import { users } from './users.js';

// const getNamesSortedByFriendsCount = users => {
//   return users.sort((a, b) => a.name - b.friends);
// };

// console.log(getNamesSortedByFriendsCount(users));
// ---------------------------------------------------

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(e => e.name);
};

console.log(getNamesSortedByFriendsCount(users));
