'use strict';
import { users } from './users.js';

const getInactiveUsers = users => {
  return users
    .filter(user => !user.isActive)
    .map(user => `обьект ${user.name}`);
};

console.log(getInactiveUsers(users));
