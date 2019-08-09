'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'hepi';
user.hobby = 'javascript';
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(user[key]);
}
console.log(user);
