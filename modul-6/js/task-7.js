'use strict';
import { users } from './users.js';

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, tweet) => totalBalance + tweet.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
