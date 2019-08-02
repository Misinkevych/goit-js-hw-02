'use strict';

// const userToDelete = 'Ajax';
// const userToInsert = 'Kong';
const insertBefore = 'Jay';
const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
console.log(users.shift());

console.log(users.pop());

users.unshift('Lux');
users.push('Jay', 'Kiwi');

const userToDelete = users.splice(2, 1);
const userToInsert = users.splice(2, 0, 'Kong');

console.log(users);
