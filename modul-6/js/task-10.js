'use strict';
import { users } from './users.js';

const getSortedUniqueSkills = users => {
  return users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((user, index, arr) => arr.indexOf(user) === index)
    .sort();
};
console.log(getSortedUniqueSkills(users));
